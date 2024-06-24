"use client"
import jwt_decode from 'jsonwebtoken/decode';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from "react";
import ServiceManager from '../../api/service_management/ServiceManager';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [token, setToken] = useState(null);
  const router = useRouter();
  const serviceManager = new ServiceManager();

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if(savedToken){
      setToken(savedToken);
      const decodeToken = jwt_decode(savedToken);
      const expirationTime = decodeToken.exp * 1000;
      const currentTime = new Date().getTime();

      if (currentTime > expirationTime) {
        exit();
      }
    }
    else{
      router.push('/login')
    }
  }, []);


  const exit  = () => {
    setToken(null);
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <AuthContext.Provider value={{token, exit}}>
      {children}
    </AuthContext.Provider>
  );

  
}

export const useAuth = () => useContext(AuthContext);