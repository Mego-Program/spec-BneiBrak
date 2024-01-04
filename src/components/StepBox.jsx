import React from 'react';
import Box from '@mui/material/Box';

import InvisibleNamesList from './step2';
import TextEditor from './step1';
import CreateKpi from "./step3.jsx";


// kpiList, setKpiList
const StepBox = ({ active, step, stepperData, setStepperData}) => {

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
          <CreateKpi
              setStepperData={setStepperData} stepperData={stepperData}
              // kpiList={kpiList} setKpiList={setKpiList}
              />
        </div>
      );
  }

  return <Box sx={boxStyle}>{content}</Box>;
};

export default StepBox;
