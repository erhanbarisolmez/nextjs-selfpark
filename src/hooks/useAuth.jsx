"use client"
import jwt_decode from 'jsonwebtoken/decode';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from "react";
import ServiceManager from '../../api/service_management/ServiceManager';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const serviceManager = new ServiceManager();

  const exit = () => {
    setToken(null);
    localStorage.removeItem('token');
    router.push('/login');
  }
  useEffect(() => {
    const checkTokenValidity = async () => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        setToken(savedToken);
        let decodedToken;

        try {
          decodedToken = jwt_decode(savedToken);
        } catch (error) {
          console.error("Error decoding token: ", error);
          exit();
          return;
        }
        if (decodedToken && decodedToken.exp) {
          const expirationTime = decodedToken.exp * 1000;
          const currentTime = new Date().getTime();
          if (currentTime > expirationTime) {
            exit();
          } else {
            try {
              const isTokenValid = await serviceManager.authService.tokenExpiredControl(savedToken);
              if (isTokenValid) { // true means the token is invalid
                exit();
              }
            } catch (error) {
              console.error("Error validating token with backend:", error);
              exit();
            }
          }
        }else{
          exit();
        }
      }else{
        router.push("/login")
      }
    }

    checkTokenValidity();
  }, [router, serviceManager])


  return (
    <AuthContext.Provider value={{ token, exit }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);