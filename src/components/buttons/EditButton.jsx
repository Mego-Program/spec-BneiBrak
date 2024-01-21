import EditIcon from "@mui/icons-material/Edit.js";
import {Button} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";


export default function EditButton({ spec }) {
    const navigate = useNavigate();

    /**
     * Navigates to the stepper page for editing a spec.
     * Transferring the information of the spec to the stepper along with going to the stepper's page
     */
    const handleEdit = () => {
        navigate('/spec/stepper', { state: { spec } });
    };

    return (
        <Button
            variant="text"
            size="small"
            sx={{
                color: 'white',
                height: '53',
                width: '53',
                minWidth: '0px',
                borderRadius: '50%',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#F6C927',
                margin: '0 10px',
                '&:hover': { bgcolor: '#F6C927' },
            }}
            onClick={handleEdit}
        >
            <EditIcon />
        </Button>
    )
}