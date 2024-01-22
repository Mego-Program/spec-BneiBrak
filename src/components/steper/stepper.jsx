import React, { useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";

import StepBox from './StepBox.jsx';
import StepsLabel from '../buttons/stepsLabel.jsx';
import ForwardBackward from "../buttons/forwardBackward.jsx";
import Box from '@mui/material/Box';


const steps = ['Select campaign settings', 'Create an ad group', 'KPIs'];

export default function HorizontalNonLinearStepper() {
  const location = useLocation();

  const [stepperData, setStepperData] = useState(
      {title: '', content: '', projectId: '',
          participants: [], kpis: [], status: 'active'});

  // flags:
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState([false, false, false]);
  const isUpdate = location.state && location.state.spec

    useEffect(() => {
        if (isUpdate) {setStepperData(location.state.spec)}
    }, [location]);

    useEffect(() => {
        const step1 = !!stepperData.title
        const step2 = !!stepperData.participants.length
        const step3 = !!stepperData.kpis.length
        setCompleted([step1, step2, step3]);
    }, [stepperData]);

  return (
    <Box sx={{ width: '90%', margin: '0 auto', marginTop: '3%' }}>
        <StepsLabel activeStep={activeStep} setActiveStep={setActiveStep}
                    completed={completed} steps={steps}
        />

        <StepBox active={true} step={activeStep + 1}
               setStepperData={setStepperData} stepperData={stepperData}
               sx={{width: '100%', high:'80%'}}
        />

        <ForwardBackward
            setStepperData={setStepperData} stepperData={stepperData}
            activeStep={activeStep} setActiveStep={setActiveStep}
            completed={completed} steps={steps} isUpdate={isUpdate}
        />

    </Box>
  );
}
