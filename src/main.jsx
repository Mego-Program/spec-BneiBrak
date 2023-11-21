import React from "react";
import ReactDOM from "react-dom";
import Routes from "./components/Routes";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
