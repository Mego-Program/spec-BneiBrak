import React from 'react';
import TextField from '@mui/material/TextField';
import RichTextEditor from './RichTextEditor';

const TextEditor = ({stepperData, setStepperData}) => {

    return (
    <div>
      <TextField
        aria-label="Title" label="Title" placeholder="Title" fullWidth
        value={stepperData.title}
        onChange={(e) => {setStepperData({ ...stepperData, title: e.target.value})}}
        style={{ marginTop: '10px', backgroundColor: '#21213E', color: '#fff', borderRadius: '7px' }}
        InputProps={{style: {color: 'white',},}}
      />

        <RichTextEditor stepperData={stepperData} setStepperData={setStepperData}
                        aria-label="Content" label="Content" placeholder="Content"
        />

    </div>
  );
};

export default TextEditor;
