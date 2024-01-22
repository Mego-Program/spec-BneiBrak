import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewSpecButton from "../buttons/NewSpec.jsx";
import SpecItem from './specItem.jsx';

import { Grid } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


/**
 * Component for displaying a list of specifications.
 * @component
 */
function SpecList() {
    // State to hold the list of all the specs
    const [teamSpecs, setTeamSpecs] = useState([]);
    const [flag, setFlag] = useState(true);

    // Get all the specs from the Database and set them in the state
    const getSpecs = async () => {
        try {
            if (flag) {
                const listSpec = await axios.get(`${import.meta.env.VITE_BACKEND_URL}`);
                setTeamSpecs(listSpec.data.data);
                setFlag(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {getSpecs()}, [renderList]);
    function renderList() {setFlag(true)}

    return (
        <Grid container spacing={2} sx={{ width: '125%', left: '5%' }}>

            <Grid item xs={1}>
                <Timeline
                    position="left"
                    sx={{width: '350%', padding: '1px', height: '100%', marginTop: '75px'}}
                >
                    {[...teamSpecs].reverse().map((spec, index) => (
                        <TimelineItem
                            key={spec._id}
                            sx={{ height: `${100 / (teamSpecs.length+1)}%` }}
                        >
                            <TimelineSeparator>
                                <TimelineDot color="secondary" />
                                {index < teamSpecs.length && (
                                    <TimelineConnector sx={{ backgroundColor: 'secondary.main' }}/>
                                )}
                            </TimelineSeparator>

                            <TimelineContent
                                sx={{
                                    color: 'white',
                                    opacity: spec.status === 'Done' ? 0.5 : 1,
                                }}
                            >
                                <span>{spec.date}</span>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>

            <Grid item xs={10}>
                <Grid container spacing={2} style={{ width: '100%' }}>
                    <Grid item xs={12}>
                        <NewSpecButton/>
                    </Grid>
                    {[...teamSpecs].reverse().map((spec) => (
                        <Grid key={spec._id} item xs={12} >
                            <div style={{ width: '200%'}}>
                                <SpecItem spec={spec} renderList={renderList} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
    );
}

export default SpecList;
