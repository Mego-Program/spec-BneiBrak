// StepBox.jsx
import React from 'react';
import Box from '@mui/material/Box';
import BasicSelect from './step3'

const StepBox = ({ active, step }) => {
  const boxStyle = {
    width: '773px',
    height: '417px',
    borderRadius: '15px',
    background: '#121231',
    display: active ? 'block' : 'none',
    position: 'absolute',
    top: '50%', // Set top to 50% to position vertically at the center
    left: '50%', // Set left to 50% to position horizontally at the center
    transform: 'translate(-50%, -50%)', // Center the box using transform
    color: '#fff',
    padding: '20px',
  };

  let content;

  switch (step) {
    case 1:
      content = (
        <div>
          <label htmlFor="textInput">Text Input:</label>
          <input type="text" id="textInput" name="textInput" />
        </div>
      );
      break;
    case 2:
      content = (
        <div>
          מקום שמור להכנסת קומפוונטות חיצוניות
        </div>
      );
      break;
    case 3:
      content = (<BasicSelect/>
      );
      break;
    default:
      content = null;
  }

  return <Box sx={boxStyle}>{content}</Box>;
};

export default StepBox;
