'use client'
import { useTheme } from "next-themes";
import ThumbChildDarkMode from "./ThumbChildDarkMode";

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <>
      <ThumbChildDarkMode
        onChange={toggleTheme}
        childIcon={resolvedTheme === 'light' ? 'light' : 'dark'} 
      />
    </>
  )
}
