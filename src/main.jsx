import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import theme from "./theme";
import { ThemeProvider } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);


