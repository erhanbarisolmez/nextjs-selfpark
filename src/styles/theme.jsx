import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  palette:{
    type: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main:'#dc004e',
    }
  }
});


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary:{
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1',
    }
  }
});

export { darkTheme, lightTheme };
