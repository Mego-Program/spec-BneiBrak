import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import React from "react";

// const customConnectorStyles = {
//     '& .MuiStepConnector-lineHorizontal': {
//         border: '2px solid #121231',
//     },
// };

const StepsLabel = ({ activeStep, setActiveStep, steps, completed }) => {

    const handleStep = (step) => {
        setActiveStep(step);
    };

    return (
        <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
                backgroundColor: 'transparent',
                padding: 0,
                zIndex: 1,
                // ...customConnectorStyles,
            }}
        >
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel
                        onClick={() => handleStep(index)}
                        icon={
                            <Box
                                sx={{
                                    width: activeStep === index ? 191 : 38,
                                    height: 38,
                                    borderRadius: activeStep === index ? '26px' : '50%',
                                    backgroundColor: completed[index] ? '#F6C927' : '#121231',
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
    );
};

export default StepsLabel;
