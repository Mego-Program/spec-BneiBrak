import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const spec1 = {
  title: "title",
  content: "content",
  date: "2023-11-27"
};

const TextEditor = ({stepperData, setStepperData}) => {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const [showContent, setShowContent] = useState(false);

  const [complete, setComplete] = useState({});

  const handleSave = () => {
    // setShowContent(true);
    
  
    // Make a POST request using Axios
    // axios.post('http://localhost:3000/', spec)
    //   .then(response => {
    //     // If the request is successful, setShowContent to true
    //     console.log('Data has been sent:', response.data);
    //   })
    //   .catch(error => {
    //     // Handle errors here
    //     console.error('Error sending data:', error);
    //   });
  };

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

      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: '10px', backgroundColor: '#21213E', color: '#fff' }}
      >
        Save
      </Button> */}

      
      
      {showContent && (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};



export default TextEditor;
