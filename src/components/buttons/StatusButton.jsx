import axios from "axios";
import {Grid, MenuItem, Select} from "@mui/material";
import React from "react";


export default function StatusButton({ spec, renderList, isInProcess }) {
    const statusColor = isInProcess ? '#ffffff' : 'primary.main';

    /**
     *  Edit the status of a spec in the Database and active the edit in the page.
     * @body status - The new status of the spec
     */
    const handleEditStatus = async (event) => {
        try {
            await axios.put(`${import.meta.env.VITE_BACKEND_URL}/status/${spec._id}`, {
                status: event.target.value,
            });
            renderList();
        } catch (error) {
            console.error('Error updating:', error);
        }
    };

    return (
        <Grid item>
            <Select
                value={spec.status}
                onChange={handleEditStatus}
                sx={{
                    height: '30%',
                    color: statusColor,
                    '& .MuiSelect-icon': {
                        color: statusColor,
                    },
                }}
            >
                <MenuItem value="In process">In process</MenuItem>
                <MenuItem value="active">active</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
            </Select>
        </Grid>
    )
}