import React from 'react';
import TextField from '@mui/material/TextField';
import RichTextEditor from './RichTextEditor';

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
        <RichTextEditor stepperData={stepperData} setStepperData={setStepperData}
                        aria-label="Content"
                        label="Content"
                        fullWidth
                        placeholder="Content"
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
