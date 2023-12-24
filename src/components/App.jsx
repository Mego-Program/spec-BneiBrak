import React from 'react';
import SpecList from './specList';
import { Container } from '@mui/material';
import SpecTabs from './SpecTabs';
import CustomDropdown from './CustomDropDown';
import AlertDialog from './AlertDialog';

function App() {
  return (
    <Container>
    <SpecList />
      {/*<SpecTabs />*/}
      {/*{<CustomDropdown/>}*/}
      {/* {<AlertDialog/>} */}
    </Container>
  );
}

export default App;

