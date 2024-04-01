import { useTheme } from "next-themes";

export const useThemeHook = () => {
  const { resolvedTheme } = useTheme();

  const getThemeStyles = () => {
    const isDarkMode = resolvedTheme === 'dark';
    const backgroundColor = isDarkMode ? '#292e32' : "#f3f6f9";
    const textColor = isDarkMode ? 'white' : 'black';
    const buttonColor = isDarkMode ? "white" : 'black';
    const leftColorBg = isDarkMode ? '#212529' : '#212529S';
    const linkColor = isDarkMode ? '#f3f6f9' : "#332D2F"
    const whiteColor = isDarkMode ? '#f3f6f9' : '#f3f6f9';
    const logo = isDarkMode ? '/images/selparklogo2.png' : '/images/selfparklogo.png';
    const headerBorderBottom = isDarkMode ? '#b2bfe4' : '#F5F1B4';

 
    return {
      isDarkMode,
      backgroundColor,
      textColor,
      buttonColor,
      leftColorBg,
      logo,
      linkColor,
      whiteColor,
      headerBorderBottom,
    
    }
  }

  const getModalStyles = () => {
    const isDarkMode = resolvedTheme === 'dark';
    const textColor = isDarkMode ? 'white' : 'black';
    const modalHover = isDarkMode ? '#212529' : '';
    const modalDialogBackground = isDarkMode ? '#2b3034' : 'white';
    const tabMenuBackground = isDarkMode ? '#636b74' : '';
    const modalCloseButton = isDarkMode ? "solid" : 'plain';
    const dividerBackgroundColor = isDarkMode ?  'white' : 'transparent';
    const infoCardButton = isDarkMode ? "solid" : "outlined";
    const textFieldMobileDatePicker = isDarkMode ? textColor : "";
    const modalCard = isDarkMode ? '#292e32' : "#f3f6f9";

    return {
      isDarkMode,
      textColor,
      modalHover,
      modalDialogBackground,
      tabMenuBackground,
      modalCloseButton,
      dividerBackgroundColor,
      infoCardButton,
      textFieldMobileDatePicker,
      modalCard
    }
  }


  return {
    getThemeStyles,
    getModalStyles
  }
}