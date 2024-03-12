import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import {useNavigate} from "react-router-dom";


export default function ForwardBackward({activeStep, setActiveStep, completed, steps, isUpdate, stepperData, setStepperData}) {
    const navigate = useNavigate();
    let unCompletedSteps = completed.findIndex((val) => val === false);

    const isFinished = () => activeStep === steps.length - 1 &&
        completed.every((val) => val === true);

    const handleNext = () => {
        if (isFinished()) {
            let url = `${import.meta.env.VITE_BACKEND_URL}`
            url = isUpdate ? url + `/update` : url + '/save'

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
        else if (activeStep === steps.length - 1) {
            setActiveStep(unCompletedSteps);
            alert(`Something missing, \n you must to complete step: ${unCompletedSteps+1}`);
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(
        <Box
            sx={{
                position: 'flex',
                // width: '100%', high:'20%',
                display: 'flex',
                justifyContent: activeStep === 0 ? 'flex-end' : 'space-between',
            }}
        >
            {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ backgroundColor: '#21213E', color: 'white' }}>
                    Back
                </Button>
            )}
            <Button onClick={handleNext}
                    sx={{ backgroundColor: '#21213E', color: 'white' }}>
                {isFinished() ? 'Finish' : 'Next'}
            </Button>
        </Box>
    )
}