import { createTheme } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    secondary: {
      main: '#121231',
    },
    background: {
      default: '#21213E',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  
});

theme = createTheme(theme, {components: {
  MuiTab: {
    styleOverrides: {
      root:{
        "&.MuiTab-root":{
          color:"#FFFFFF",
        },
        "&.Mui-selected": {
          color: "#F6C927",
        },
       
      }
    }
  }
}})

export default theme;
