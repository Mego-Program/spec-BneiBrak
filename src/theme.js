import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    secondary: {
      main: '#0A0A1B',
    },
    background: {
        main:'#21213E'
    },
    },
    typography: {
        fontFamily: 'Poppins'
        }
});

export default theme;