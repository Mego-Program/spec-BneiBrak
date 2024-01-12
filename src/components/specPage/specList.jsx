import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SpecItem from './specItem3.jsx';

import { Grid, Button, Typography } from '@mui/material';
import AddBox from '@mui/icons-material/AddBox';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function SpecList() {
    const [teamSpecs, setTeamSpecs] = useState([]);
    const [flag, setFlag] = useState(true);

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

    useEffect(() => {
        getSpecs();
    }, [renderList]);

    function renderList() {
        setFlag(true);
    }

    return (
        <Grid container spacing={2} sx={{ width: '110%', left: '10%' }}>
            <Grid item xs={1}>
                <Timeline
                    position="left"
                    sx={{
                        width: '350%',
                        padding: '1px',
                        height: '100%',
                        marginTop: '75px',
                    }}
                >
                    {[...teamSpecs].reverse().map((spec, index) => (
                        <TimelineItem
                            key={spec._id}
                            sx={{ minHeight: `${100 / teamSpecs.length - 2}%` }}
                        >
                            <TimelineSeparator>
                                <TimelineDot color="secondary" />
                                {index < teamSpecs.length && (
                                    <TimelineConnector
                                        sx={{ backgroundColor: 'secondary.main' }}
                                    />
                                )}
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{
                                    paddingLeft: '10px',
                                    paddingTop: '4px',
                                    color: 'white',
                                    opacity: spec.status === 'Done' ? 0.5 : 1,
                                    minHeight: '20px',
                                }}
                            >
                                <span>{spec.date}</span>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>
            <Grid item xs={10}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button
                            component={Link}
                            to={'stepper'}
                            variant="contained"
                            color="primary"
                            style={{
                                width: '278px',
                                height: '55px',
                                borderRadius: '5px',
                                justifyContent: 'space-between',
                                marginLeft: '10px',
                                display: 'flex',
                                marginTop: '20px',
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
                                <AddBox sx={{ height: '50%' }} />
                            </div>
                        </Button>
                    </Grid>
                    {[...teamSpecs].reverse().map((spec) => (
                        <Grid key={spec._id} item xs={12}>
                            <div style={{ width: '220%',}}>
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
