import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    secondary: {
      main: '#0A0A1B',
    },
    background: {
      default: '#21213E',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export default theme;