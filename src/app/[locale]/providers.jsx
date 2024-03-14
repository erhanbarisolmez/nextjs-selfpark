'use client'
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

  export const Providers = ({children}) => {
    const [theme, setTheme] = useState();

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, [localStorage]);


    return (
      <NextThemeProvider attribute="class" defaultTheme="light" value={theme}   >
        {children}
      </NextThemeProvider>
    )
  }
  