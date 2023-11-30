import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';


const TextEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleSave = () => {
    setShowContent(true);
  };

  return (
    <div>
      <TextField
        aria-label="Title"
        label="Title"
        minRows={3}
        fullWidth
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: '100%', marginTop: '10px', backgroundColor: '#21213E', color: '#fff' }}
        InputProps={{
          style: {
            color: 'white',
          },
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: '10px', backgroundColor: '#21213E', color: '#fff' }}
      >
        Save
      </Button>

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
