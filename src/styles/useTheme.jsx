import { useTheme } from "next-themes";

export const useThemeGlobal = () => {
  const resolvedTheme = useTheme();
  const themeType = resolvedTheme === 'dark' ? 'dark' : 'light';

  const lefColorBg = themeType === 'dark' ? '#212529' : '#212529S';
  const cardBackgroundColor = themeType === 'dark' ? '#292e32' : "#f3f6f9"

  const textColor = themeType === 'dark' ? '#f3f6f9' : '#332D2F';
  const logoColor = themeType === 'dark' ? '#f3f6f9' : '#332D2F';
  
  return { cardBackgroundColor, textColor, logoColor, lefColorBg , themeType};
}
