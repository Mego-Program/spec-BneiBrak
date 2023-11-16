import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Avatar, AvatarGroup } from '@mui/material';

export default function SpecItem({ spec }) {
  const isInProgress = spec.status === 'In progress';
  const cardBorderColor = isInProgress ? '#F6C927' : 'transparent';
  const cardOpacity = spec.status === 'Done' ? 0.5 : 1;
  const statusColor = isInProgress ? '#ffffff' : '#F6C927';

  return (
    <Card
      sx={{
        borderColor: cardBorderColor,
        borderWidth: '3px',
        borderStyle: 'solid',
        opacity: cardOpacity,
        width: '1200px',
        height: '130px',
        backgroundColor: "#121231", 
        color: "white",
        
      }}
    >
      <CardContent>
        <Grid container >
          <Grid item xs={12}>
            <Typography sx={{fontSize: '25px'}}>{spec.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{marginBottom: '60px', fontSize: '12px'}}>{spec.content}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{marginLeft: '90px', fontSize: '17px', color: statusColor}}>{spec.status}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button variant='text' size='small' sx={{color: 'white'}}>Edit</Button>
          </Grid>
          <AvatarGroup>
            <Avatar alt="User 1" sx={{bgcolor:"#121231", color:'#F6C927', }}>A</Avatar>
            <Avatar alt="User 2" sx={{bgcolor:"#121231", color:'#F6C927', }}>A</Avatar>
            <Avatar alt="User 3" sx={{bgcolor:"#121231", color:'#F6C927', }}>A</Avatar>
            <Avatar alt="User 4" sx={{bgcolor:"#121231", color:'#F6C927', }}>A</Avatar>
          </AvatarGroup>
        </Grid>
      </CardContent>
    </Card>
  );
}
