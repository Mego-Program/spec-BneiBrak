import React from 'react';
import App from './App';
import HorizontalNonLinearStepper from "./stepper"
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />} />
      <Route path="/stepper/*" element={<HorizontalNonLinearStepper />} />
    </ReactRoutes>
  );
};

const MainRoute = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default MainRoute;
