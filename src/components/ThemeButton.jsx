'use client'
import {
  DarkMode as DarkIcon,
  LightMode as LightIcon
} from "@mui/icons-material"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
export const ThemeButton = () => {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if(!mounted){
    return null
  }

  return (
    <button 
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? (
        <LightIcon />
      ) :( <DarkIcon />)}
    </button>
  )
}
