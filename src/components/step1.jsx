import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';


const TextEditor = ({stepperData, setStepperData}) => {
  const [showContent, setShowContent] = useState(false);

  const [complete, setComplete] = useState({});

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
