import React, { useState } from 'react';
import { Grid } from '@mui/material';
import SpecItem from './specItem';


function SpecList() {

  const [teamSpecs, setTeamSpecs] = useState([
      {
        id: 1,
        title: 'Team Spec 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
        date: '2022-11-01',
        status: 'In progress',
        participants: ['A', 'B', 'C', 'D']
      },
      {
        id: 2,
        title: 'Team Spec 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
        date: '2022-11-01',
        status: "Done",
        participants: ['A', 'B', 'C', 'D']
      },
      {
        id: 3,
        title: 'Team Spec 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
        date: '2022-11-01',
        status: "In progress",
        participants: ['A', 'B', 'C', 'D']
      },
      {
        id: 4,
        title: 'Team Spec 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.',
        date: '2022-11-01',
        status: "Done",
        participants: ['A', 'B', 'C', 'D']
      }
    ]);

  return (
    //check list componnent
    <Grid container spacing={4} marginTop={'10px'} >
      {teamSpecs.map(spec => (
        <Grid key={spec.id} item xs={12}>
          <SpecItem spec={spec} />
        </Grid>
      ))}
    </Grid>
  );

}
export default SpecList;