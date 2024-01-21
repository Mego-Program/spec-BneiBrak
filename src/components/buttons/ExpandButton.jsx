import React, { useState } from "react";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ExpandButton({ expanded, setExpanded }) {
    const handleExpandClick = () => setExpanded(!expanded);

    return (
        <Button
            onClick={handleExpandClick}
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
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
            }}
        >
            <ExpandMoreIcon />
        </Button>
    );
}
