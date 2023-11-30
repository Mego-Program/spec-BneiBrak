import React, { useState} from 'react';
import { Grid, Button, Typography } from '@mui/material';
import SpecItem from './specItem';
import AddBox from '@mui/icons-material/AddBox';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


function SpecList() {
  //Here is the code that will call and get the information via api

      // const [teamSpecs, setTeamSpecs] = useState([]);

      // useEffect(() => {
      //   fetch('your-api-endpoint')
      //     .then(response => response.json())
      //     .then(data => setTeamSpecs(data))
      //     .catch(error => console.error('Error fetching data:', error));
      // }, []);



  const [teamSpecs, setTeamSpecs] = useState([
    {
      id: 1,
      title: 'Team Spec 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
      date: '12.12.23',
      status: 'In progress',
      participants: ['A', 'B', 'C', 'D'],
    },
    {
      id: 2,
      title: 'Team Spec 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
      date: '13.12.23',
      status: 'Done',
      participants: ['A', 'B', 'C', 'D'],
    },
    {
      id: 3,
      title: 'Team Spec 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
      date: '14.12.23',
      status: 'In progress',
      participants: ['A', 'B', 'C', 'D'],
    },
    {
      id: 4,
      title: 'Team Spec 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
      date: '15.12.23',
      status: 'Done',
      participants: ['A', 'B', 'C', 'D'],
    },
    {
      id: 5,
      title: 'Team Spec 5',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
      date: '16.12.23',
      status: 'In progress',
      participants: ['A', 'B', 'C', 'D'],
    },
  ]);
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Timeline
          position="left"
          sx={{
            width: '20px',
            padding: '1px',
            height: '100%',
            marginTop: '75px',
          }}
        >
          {teamSpecs.map((spec, index) => (
            <TimelineItem key={spec.id} sx={{ minHeight: `${100 / teamSpecs.length - 2}%` }}>
              <TimelineSeparator>
                <TimelineDot color="secondary"/>
                {index < teamSpecs.length && <TimelineConnector sx={{ backgroundColor: 'secondary.main' }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ paddingLeft: '10px', paddingTop: '4px', color: 'white', opacity: spec.status === 'Done' ? 0.5 : 1 }}>
                {spec.date}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: '278px',
                height: '55px',
                borderRadius: '5px',
                justifyContent: 'space-between',
                marginLeft: '10px',
                display: 'flex',
                marginTop: '20px'
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
                <AddBox sx={{height : '55px'}}/>
              </div>
            </Button>
          </Grid>
          {teamSpecs.map((spec) => (
            <Grid key={spec.id} item xs={12}>
              <SpecItem spec={spec} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SpecList;