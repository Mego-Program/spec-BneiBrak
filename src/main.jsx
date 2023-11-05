import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import theme from "./theme";
import { ThemeProvider } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
,
 document.getElementById("root"));



