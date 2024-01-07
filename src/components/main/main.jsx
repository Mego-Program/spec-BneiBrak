import React from "react";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Routes from "./routes.jsx";
import { createRoot } from "react-dom/client"


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
<ThemeProvider theme={theme}>
  <CssBaseline />
  <Routes />
</ThemeProvider>,);

