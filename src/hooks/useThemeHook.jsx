import { useTheme } from "next-themes";

export const useThemeHook = () => {
  const { resolvedTheme } = useTheme();

  const getThemeStyles = () => {
    const isDarkMode = resolvedTheme === 'dark';
    const backgroundColor = isDarkMode ? '#292e32' : "#f3f6f9";
    const textColor = isDarkMode ? 'white' : 'black';
    const buttonColor = isDarkMode ? "white" : 'black';
    const lefColorBg = isDarkMode ? '#212529' : '#212529S';
    const linkColor = isDarkMode ? '#f3f6f9' : "#332D2F"
    const whiteColor = isDarkMode ? '#f3f6f9' : '#f3f6f9';
    const logo = isDarkMode ? '/images/selparklogo2.png' : '/images/selfparklogo.png';
    const headerBorderBottom = isDarkMode ? '#b2bfe4' : '#F5F1B4';
    return {
      isDarkMode,
      backgroundColor,
      textColor,
      buttonColor,
      lefColorBg,
      logo,
      linkColor,
      whiteColor,
      headerBorderBottom
    }
  }

  return {
    getThemeStyles
  }
}