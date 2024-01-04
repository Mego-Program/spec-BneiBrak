import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

import { Card, CardContent, Typography, Grid, Button, Avatar, AvatarGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function SpecItem({ spec, deleteSpec, editStatus }) {
  const isInProcess = spec.status === 'In process';
  const cardBorderColor = isInProcess ? 'primary.main' : 'transparent';
  const statusColor = isInProcess ? '#ffffff' : 'primary.main';
  const cardOpacity = spec.status === 'Done' ? 0.5 : 1;
  const navigate = useNavigate();

  const handleDelete = async (idToDelete) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete/${idToDelete}`);
      console.log('Spec deleted successfully');
      deleteSpec(idToDelete)
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const onClickDelete = () => {
    let check = prompt('Are you sure you want to delete this spec? yes or no', 'yes')
    if (check === 'yes') {
      handleDelete(spec._id)
    }
  };

  const handleEdit = () => {
    navigate('/stepper', {state: {spec}})
  }

  const handleEditStatus = async (specId, status) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/status/${specId}`);
      console.log('Spec updated status successfully');
      editStatus(specId, status)
    } catch (error) {
      console.error('Error updating:', error);
    }
  }

  return (
      <Card
          sx={{
            borderColor: cardBorderColor,
            borderWidth: '1px',
            borderStyle: 'solid',
            opacity: cardOpacity,
            width: '1168px',
            height: '143px',
            bgcolor: "secondary.main",
            color: "white",
          }}
      >
        <CardContent
        onClick={() => {
          console.log(spec)
        }}
          >
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{fontSize: '25px',}}>{spec.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{marginBottom: '60px', fontSize: '12px'}}>{spec.content}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{marginLeft: '120px', color: statusColor,}}>{spec.status}</Typography>
          </Grid>

          <Grid item xs={3}>

            <Button variant='text' size='small' sx={{
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
            }} onClick={handleEdit}>
              <EditIcon />
            </Button>
            <Button onClick={onClickDelete} variant='text' size='small' sx={{
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
            }}>
              <DeleteIcon/>
            </Button>
          </Grid>
          <AvatarGroup>
            {spec.participants.map((person, index) => (
              <Avatar key={index} alt="User 1" sx={{ bgcolor: "#121231", color: '#F6C927', }}>{person[0]}</Avatar>
            ))}
          </AvatarGroup>
        </Grid>
      </CardContent>
    </Card>
  );
}