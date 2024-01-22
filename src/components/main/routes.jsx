import React from 'react';
import App from './App.jsx';
import HorizontalNonLinearStepper from "../steper/stepper.jsx"
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/spec/" element={<App />} />
      <Route path="/spec/stepper/*" element={<HorizontalNonLinearStepper />} />
    </ReactRoutes>
  );
};

const MainRoute = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      
        <AppRoutes />
     
    </Router>
    </ThemeProvider>
  );
};

export default MainRoute;
