import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Avatar, AvatarGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function SpecItem({ spec }) {
  const isInProgress = spec.status === 'In progress';
  const cardBorderColor = isInProgress ? 'primary.main' : 'transparent';
  const cardOpacity = spec.status === 'Done' ? 0.5 : 1;
  const statusColor = isInProgress ? '#ffffff' : 'primary.main';

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
      <CardContent>
        <Grid container >
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '25px', }}>{spec.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ marginBottom: '60px', fontSize: '12px' }}>{spec.content}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ marginLeft: '120px', color: statusColor, }}>{spec.status}</Typography>
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
            }} component={Link} to={`/tabs`}>
              <EditIcon />
            </Button>
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
            }} component={Link} to={' '}>
              <DeleteIcon />
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