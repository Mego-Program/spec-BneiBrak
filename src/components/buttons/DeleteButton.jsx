import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete.js";


export default function DeleteButton({spec, renderList}) {
    const [dialog, setDialog] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => setDialog(true);
    const handleClose = () => setOpenDialog(true);


    useEffect(() => {
        if (openDialog) {
            setDialog(false);
            setOpenDialog(false);
        }
    }, [openDialog]);

    /**
     *  Delete a spec from the Database.
     * @async
     * @param {string} idToDelete - The ID of the spec that needs to be deleted.
     */
    const handleDelete = async (idToDelete) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete/${idToDelete}`);
            renderList();
            console.log('Spec deleted successfully');
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    const onClickDelete = () => handleDelete(spec._id);


    return (
        <Button
            onClick={handleClickOpen}
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
        >
            <Dialog
                open={dialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Spec Delete`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Are you sure?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        No
                    </Button>
                    <Button onClick={onClickDelete}>Yes</Button>
                </DialogActions>
            </Dialog>
            <DeleteIcon />
        </Button>);
}