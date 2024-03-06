'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThumbChildDarkMode from "./ThumbChildDarkMode";
export const ThemeButton = () => {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if(!mounted){
    return null
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light': 'dark')
  }


  return (
    <>
    {/* <button 
    onClick={toggleTheme}>
      {resolvedTheme === 'dark' ? (
        <LightIcon />
      ) :( <DarkIcon />)}
    </button> */}
    <ThumbChildDarkMode
     onChange={toggleTheme}
     childIcon={resolvedTheme === 'light' ? 'light' : 'dark'} 
     />

    </>
  )
}