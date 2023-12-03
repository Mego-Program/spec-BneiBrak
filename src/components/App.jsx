import React from 'react';
import SpecList from './specList';
import { Container } from '@mui/material';
// import editKPIDetailsComponent from "./EditKPIDetailsComponent";
import ContentEditorComponent from "./ContentEditorComponent";
import DeleteSpecComponent from "./DeleteSpecComponent"; 
import SpecTabs from './SpecTabs';
import AlertDialog from './AlertDialog';

function App() {
  return (
    <Container>
      {/* <AlertDialog/> */}
      <SpecTabs />
      {/* <SpecList/> */}
    </Container>
  );
}

export default App;

