import React from 'react';
import Box from '@mui/material/Box';

import TextEditor from './step1/step1.jsx';
import InvisibleNamesList from './step2/step2.jsx';
import CreateKpi from "./step3/step3.jsx";


const StepBox = ({active, step, stepperData, setStepperData}) => {

  const boxStyle = {
    marginTop: '3%',
    width: '90%',
    height: '65%',
    borderRadius: '15px', 
    background: '#121231',
    display: active ? 'block' : 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    padding: '2%',
    overflowY: 'auto',
    minHeight: 'auto',
  };


  let content;

  switch (step) {
    case 1:
      content = (
        <div>
          <TextEditor  setStepperData={setStepperData} stepperData={stepperData} />
        </div>
      );
      break;
    case 2:
      content = (
        <div>
          <InvisibleNamesList  setStepperData={setStepperData} stepperData={stepperData} />
        </div>
      );
      break;
    case 3:
      content = (
        <div>
          <CreateKpi setStepperData={setStepperData} stepperData={stepperData} />
        </div>
      );
  }

  return <Box sx={boxStyle}>{content}</Box>;
};

export default StepBox;
