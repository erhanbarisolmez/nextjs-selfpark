'use client'
import { useEffect } from "react";
export const HomeUI = () => {
  useEffect(() => {
    const role = localStorage.getItem('role');
  
    if (!role || role !== 'user') {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>HomeUI</div>
  )
}
