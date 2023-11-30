import React from 'react';
import SpecList from './specList';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HorizontalNonLinearStepper from './stepper'

function App() {
  return (
    <Container>
      <SpecList />
      {/* <Route path="/" exact component={SpecList} />
      <Route path="/stepper" component={HorizontalNonLinearStepper} /> */}
      {/* <Route path="/contact" component={Contact} /> */}
    </Container>
  );
}

export default App;
