import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

export default function SpecItem({ spec }) {
  const isInProgress = spec.status === 'In progress';
  const cardBorderColor = isInProgress ? '#F6C927' : 'transparent';
  const cardOpacity = spec.status === 'Done' ? 0.5 : 1;

  return (
    <Card
      style={{
        borderColor: cardBorderColor,
        borderWidth: '2px',
        borderStyle: 'solid',
        opacity: cardOpacity,
        // width: '1271px',
        height: '174px',
        backgroundColor: "#121231", 
        color: "white",
      }}
    >
      <CardContent>
        <Grid container style={{width: '1271px', height: '174px', }}>
          <Grid item xs={12}>
            <Typography style={{fontSize: '32px'}}>{spec.title}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography style={{marginBottom: '30px', fontSize: '12px'}}>{spec.content}</Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography style={{marginLeft: '90px', fontSize: '17px'}}>{spec.status}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button style={{color: 'white', fontSize: '17px', paddingTop: '1px'}}>Edit</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
