import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

import {Card, CardContent, Typography, Grid, Button, Avatar,
  AvatarGroup, Select, MenuItem } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from '../steper/step3/AlertDialog';

export default function SpecItem({ spec, renderList }) {
  const isInProcess = spec.status === 'In process';
  const cardBorderColor = isInProcess ? 'primary.main' : 'transparent';
  const statusColor = isInProcess ? '#ffffff' : 'primary.main';
  const cardOpacity = spec.status === 'Done' ? 0.5 : 1;
  const navigate = useNavigate();

  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const handleDelete = async (idToDelete) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete/${idToDelete}`);
      renderList();
      console.log('Spec deleted successfully');
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleEdit = () => {
    navigate('/spec/stepper', { state: { spec } });
  };

  const handleEditStatus = async (event) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/status/${spec._id}`, { status: event.target.value });
      renderList();
    } catch (error) {
      console.error('Error updating:', error);
    }
  };

  const handleDeleteWithConfirmation = () => {
    setConfirmationDialogOpen(true);
  };

  const handleDeleteConfirmed = () => {
    handleDelete(spec._id);
    setConfirmationDialogOpen(false);
  };

  const handleDeleteCancelled = () => {
    setConfirmationDialogOpen(false);
  };

  return (
      <Card
          sx={{
            borderColor: cardBorderColor,
            borderWidth: '1px',
            borderStyle: 'solid',
            opacity: cardOpacity,
            width: '1168px',
            height: '143px',
            bgcolor: 'secondary.main',
            color: 'white',
          }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: '25px' }}>{spec.title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ marginBottom: '60px', fontSize: '12px' }}>
                <div dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(spec.content)) }} />
              </Typography>
            </Grid>
            <AvatarGroup sx={{ width: '15%' }}>
              {spec.participants.map((person, index) => (
                  <Avatar key={index} alt={person.lastName} sx={{ bgcolor: '#121231', color: '#F6C927' }}>
                    {person[0]}
                  </Avatar>
              ))}
            </AvatarGroup>
            <Grid item xs={3}>
              <Select
                  value={spec.status}
                  onChange={handleEditStatus}
                  sx={{
                    height: '20px',
                    marginLeft: '120px',
                    marginTop: '3%',
                    size: 'large',
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
            <Grid item xs={3}>

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
                    '&:hover': {
                      bgcolor: '#F6C927',
                    },
                  }}
                  onClick={handleEdit}
              >
                <EditIcon />
              </Button>
              <Button
                  onClick={handleDeleteWithConfirmation}
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
                    '&:hover': {
                      bgcolor: '#F6C927',
                    },
                  }}
              >
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
}
