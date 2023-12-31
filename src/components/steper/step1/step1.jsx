import React from 'react';
import TextField from '@mui/material/TextField';
// import RichTextEditor from './RichTextEditor';
// const content = '{"blocks":[{"key":"6kdab","text":"Hello  Meir","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"UNDERLINE"},{"offset":5,"length":6,"style":"BOLD"},{"offset":5,"length":2,"style":"ITALIC"}],"entityRanges":[],"data":{}}],"entityMap":{}}'
{/*<RichTextEditor content={content}/>*/}

const TextEditor = ({stepperData, setStepperData}) => {
  return (
    <div>
      <TextField
        aria-label="Title"
        label="Title"
        minRows={3}
        fullWidth
        placeholder="Title"
        value={stepperData.title}
        onChange={(e) => {
          setStepperData({ ...stepperData, title: e.target.value})
          }}
        style={{ width: '100%', marginTop: '10px', backgroundColor: '#21213E', color: '#fff' }}
        InputProps={{
          style: {
            color: 'white',
          },
        }}
      />
      <TextField
        aria-label="Content"
        label="Content"
        minRows={3}
        fullWidth
        placeholder="Content"
        value={stepperData.content}
        onChange={(e) => {
          setStepperData({ ...stepperData, content: e.target.value})
          }}
        style={{ width: '100%', marginTop: '10px', backgroundColor: '#21213E', color: '#fff' }}
        InputProps={{
          style: {
            color: 'white',
          },
        }}
      />
    </div>
  );
};

export default TextEditor;
