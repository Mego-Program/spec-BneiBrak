import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import StepBox from './StepBox';
import axios from 'axios';


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
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [stepperData, setStepperData] = useState({
    title: '',
    content: '',
    participants: [],
    kpis: [],
  });

  // TODO: להשלים את המשיכה מעידן ומאיר

  // TODO: להחזיק את הKPI במשתנה stepperData כמו שעשינו עם המשתתפים
  // TODO: בפונקציה עדכון פשוט למשוך את השדות של ה-spec לתוך השדות ב-stepperData וכך לחסוך את הפונקציה
  // TODO: אם יש ID אז למשוך כאמור את השדות stepperData ואם לא תיצור מודל חדש של ה- SpecScheama
  // TODO: אותו דבר צריך לעשות ל-KPI בתוך השדה הרלוונטי
    // const [kpi, setKpi] = useState({})

  // TODO: לקורא לפורט מenvאו בדרך אחרת שיראה יותר נקי ויהיה ניתן לשלוט בפורט ממקום אחד
  // TODO: רינדור אחרי לחציה על מחיקה
  // TODO: מחמיקת שורות מיותרות מכל הקוד
  // TODO: להוסיף תיעוד לכל פונקציה רלוונטית

  // TODO: לסדר את התאריך והנראות של הדפים
  // TODO: הצגת רשימת הspec ברוורס

    async function sendData(data/*, header={}*/) {
        const response = await axios.post('http://localhost:3000/spec/save', data /*, header*/);
        console.log('Data has been sent:', response.data);
        return response.data
    }
    async function sendDataToController() {
        await sendData(stepperData)
    }
    const sendDataOnClick = () => {
        sendDataToController()
        navigate("/")
        setStepperData({ ...stepperData}) /*for rendering*/
    }

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps - 1;
  const allStepsCompleted = () => completedSteps === totalSteps;

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);

  //   if (isLastStep()) {
  //     axios.post('http://localhost:3000/spec/', stepperData)
  //       .then(response => {
  //         console.log('Data has been sent:', response.data);
  //
  //       }) .catch(error => {
  //         console.error('Error sending data:', error);
  //         navigate("/spec")
  //       });
  //   }
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

      <StepBox active={true} step={activeStep + 1} setStepperData={setStepperData} stepperData={stepperData}/>

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
        <Button onClick={isLastStep() ? sendDataOnClick : handleNext}
                sx={{ backgroundColor: '#21213E', color: 'white' }}>
          {isLastStep() ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}
