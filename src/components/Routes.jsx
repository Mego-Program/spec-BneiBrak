import React from 'react';
import App from './App';
// import Edit from './edit';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />} />
      {/* <Route path="/edit/:id" element={<Edit />} /> */}
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

