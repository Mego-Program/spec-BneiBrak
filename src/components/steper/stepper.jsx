import React, { useEffect, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

import StepBox from './StepBox.jsx';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';


const steps = ['Select campaign settings', 'Create an ad group', 'KPIs'];

const customConnectorStyles = {
  '& .MuiStepConnector-lineHorizontal': {
    border: '2px solid #121231',
  },
};


export default function HorizontalNonLinearStepper() {
  const navigate = useNavigate();
  const location = useLocation();

  const [stepperData, setStepperData] = useState(
      {title: '', content: '', participants: [], kpis: [], status: 'active'});

  // flags:
  const [flag, setFlag] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  useEffect(() => {
      const booleanFlag = location.state && location.state.spec
      let data = booleanFlag ?
          location.state.spec : stepperData
      setStepperData(data)
      setFlag(booleanFlag)
  }, [location]);

  // TODO: החלק של מאיר

    // TODO: מחמיקת שורות מיותרות מכל הקוד
  // TODO: להוסיף תיעוד לכל פונקציה רלוונטית

  // TODO: לסדר את שמירת הusers
    // TODO: Responsive Design:
    // הפריסה שלך מבוססת על xs={1} ו- xs={10}, כדאי לוודא שהיא יחסית למסך קטן.
    // יש לבדוק את התצוגה על מסכים קטנים ולוודא שהעיצוב נראה נכון


  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps - 1;
  const allStepsCompleted = () => completedSteps === totalSteps;

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted() ?
          steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);

    if (isLastStep()) {
        let url = `${import.meta.env.VITE_BACKEND_URL}`
        url = flag ? url + `/update` : url + '/save'

        axios.post(url, stepperData)
        .then(response => {
          console.log('Data has been sent:', response.data);
            navigate("/spec")
            setStepperData({ ...stepperData}) /*for rendering*/
        }) .catch(error => {
          console.error('Error the data has not been sent:', error);
          navigate("/spec")
        });
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => setActiveStep(step);

  // const handleComplete = () => {
  //   setCompleted((prevCompleted) => ({
  //     ...prevCompleted,
  //     [activeStep]: true,
  //   }));
  //   handleNext();
  // };

  return (
    <Box sx={{ width: '50%', margin: '0 auto', marginTop: '3%' }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          backgroundColor: 'transparent',
          padding: 0,
          zIndex: 1,
          ...customConnectorStyles, 
        }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel
              onClick={handleStep(index)}
              icon={
                <Box
                  sx={{
                    width: activeStep === index ? 191 : 38,
                    height: 38,
                    borderRadius: activeStep === index ? '26px' : '50%',
                    backgroundColor: '#121231',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: activeStep === index ? '1px solid #F6C927' : '1px solid #121231',
                    color: 'white',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                >
                  {activeStep === index ? label : index + 1}
                </Box>
              }
            ></StepLabel>
          </Step>
        ))}
      </Stepper>

      <StepBox active={true} step={activeStep + 1}
               setStepperData={setStepperData} stepperData={stepperData}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          right: '25%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: activeStep === 0 ? 'flex-end' : 'space-between',
          pt: 2,
          
        }}
      >
        {activeStep > 0 && (
          <Button onClick={handleBack} sx={{ backgroundColor: '#21213E', color: 'white' }}>
            Back
          </Button>
        )}
        <Button onClick={handleNext}
                sx={{ backgroundColor: '#21213E', color: 'white' }}>
          {isLastStep() ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}
