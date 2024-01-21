import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import AddBox from "@mui/icons-material/AddBox.js";
import React from "react";


export default function NewSpecButton() {

    return (
        <Button
            component={Link}
            to={'stepper'}
            variant="contained"
            color="primary"
            style={{
                width: '278px',
                height: '55px',
                borderRadius: '5px',
                justifyContent: 'space-between',
                marginLeft: '10px',
                display: 'flex',
                marginTop: '20px',
                padding: '0px, 0px, 0px, 100px',
            }}
        >
            <Typography variant="button" sx={{ color: 'secondary.main' }}>
                Add a new spec
            </Typography>
            <div
                style={{
                    backgroundColor: 'secondary.main',
                    borderRadius: '5px',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    scale: '1.5',
                    height: '100%',
                }}
            >
                <AddBox sx={{ height: '100%' }} />
            </div>
        </Button>
    );
}