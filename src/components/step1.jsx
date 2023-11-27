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
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        sx={{ backgroundColor: '#21213E' }}
      />
      <TextareaAutosize
        aria-label="Content"
        minRows={3}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: '100%', marginTop: '10px', backgroundColor: '#21213E', color: '#fff' }}
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
