'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThumbChildDarkMode from "./ThumbChildDarkMode";

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme && savedTheme !== resolvedTheme) {
        setTheme(savedTheme);
      }
    }
  }, [mounted, resolvedTheme, setTheme]);

  return (
    <>
      <ThumbChildDarkMode
        onChange={toggleTheme}
        childIcon={resolvedTheme === 'light' ? 'light' : 'dark'} 
      />
    </>
  )
}
