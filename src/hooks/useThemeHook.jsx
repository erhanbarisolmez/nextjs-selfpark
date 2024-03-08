import { useTheme } from "next-themes";

export const useThemeHook = () => {
  const { resolvedTheme } = useTheme();

  const getThemeStyles = () => {
    const isDarkMode = resolvedTheme === 'dark';
    const backgroundColor = isDarkMode ?  '#292e32' : "#f3f6f9"
    const textColor = isDarkMode ? 'white' : 'black';
    const buttonColor = isDarkMode ? "white" : 'black';
    const lefColorBg = isDarkMode ? '#212529' : '#212529S';
    const logoColor = isDarkMode ? '#f3f6f9' : '#332D2F';
    const linkColor = isDarkMode ? '#f3f6f9' : "#332D2F"
    const whiteColor = isDarkMode ? '#f3f6f9' : '#f3f6f9';

    return {
      isDarkMode,
      backgroundColor,
      textColor,
      buttonColor,
      lefColorBg,
      logoColor,
      linkColor,
      whiteColor
  }
}

  return {
    getThemeStyles
  }
}