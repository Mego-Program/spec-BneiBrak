import React from "react";
import ReactDOM from "react-dom";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Routes from "./components/routes";


ReactDOM.render(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
 

