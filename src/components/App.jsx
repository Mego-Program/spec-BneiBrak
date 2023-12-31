import React from 'react';
import SpecList from './specList';
import { Container } from '@mui/material';
import RichTextEditor from './RichTextEditor';

const content = '{"blocks":[{"key":"6kdab","text":"Hello  Meir","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"UNDERLINE"},{"offset":5,"length":6,"style":"BOLD"},{"offset":5,"length":2,"style":"ITALIC"}],"entityRanges":[],"data":{}}],"entityMap":{}}'
function App() {
  return (
    <Container>
      {/* <SpecList /> */}
      <RichTextEditor content={content}/>
      
    </Container>
  );
}

export default App;
