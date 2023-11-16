import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import StepBox from './StepBox';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps - 1;
  const allStepsCompleted = () => completedSteps === totalSteps;

  const handleNext = () => {
    const newActiveStep = isLastStep() && !allStepsCompleted()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted((prevCompleted) => ({
      ...prevCompleted,
      [activeStep]: true,
    }));
    handleNext();
  };

  return (
    <Box sx={{ width: '50%', margin: '0 auto' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {activeStep === index ? (
                <Typography variant="caption">{label}</Typography>
              ) : (
                <Typography variant="caption">{index + 1}</Typography>
              )}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <StepBox active={true} step={activeStep + 1} />
      <ButtonGroup sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        {activeStep > 0 && (
          <Button onClick={handleBack} sx={{ '&:hover': { backgroundColor: '#3f51b5', color: 'white' } }}>
            Back
          </Button>
        )}
        <Button onClick={handleNext} sx={{ '&:hover': { backgroundColor: '#3f51b5', color: 'white' } }}>
          {isLastStep() ? 'Finish' : 'Next'}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
