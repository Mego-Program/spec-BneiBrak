import React from 'react';
import Box from '@mui/material/Box';
import RocketKPIForm from './kpi';
import InvisibleNamesList from './step2';
import TextEditor from './step1';

const StepBox = ({ active, step }) => {
  const boxStyle = {
    width: '773px',
    height: '417px',
    borderRadius: '15px',
    background: '#121231',
    display: active ? 'block' : 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    padding: '20px',
    overflowY: 'auto',
    maxHeight: '400px',
  };


  let content;

  switch (step) {
    case 1:
      content = (
        <div>
          <TextEditor />
        </div>
      );
      break;
    case 2:
      content = (
        <div>
          <InvisibleNamesList />
        </div>
      );
      break;
    case 3:
      content = (
        <div>
          <RocketKPIForm />
        </div>
      );
  }

  return <Box sx={boxStyle}>{content}</Box>;
};

export default StepBox;
