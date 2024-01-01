import React from 'react';
import App from './App';
import HorizontalNonLinearStepper from "./stepper"
import SpecTabs from "./SpecTabs"
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />} />
      <Route path="/stepper/*" element={<HorizontalNonLinearStepper />} />
      <Route path="/tabs" element={<SpecTabs />} />
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
