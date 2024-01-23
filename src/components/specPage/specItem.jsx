import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';

import {
    Card, CardContent, Typography, Grid, Avatar,
    AvatarGroup, Collapse, colors
} from '@mui/material';

import DeleteButton from "../buttons/DeleteButton.jsx";
import StatusButton from "../buttons/StatusButton.jsx";
import EditButton from "../buttons/EditButton.jsx";
import ExpandButton from "../buttons/ExpandButton.jsx";
import KpiItem from "../steper/step3/KpiItem.jsx";


/**
 * Component to display a single spec item.
 * @component
 * @param {Object} props - The properties passed from specList to the component.
 * @param {Object} props.spec - The specification object to be displayed.
 * @param {Function} props.renderList - Callback function to update the list of spec.
 * @returns {JSX.Element} - The rendered component.
 */
export default function SpecItem({ spec, renderList }) {
    const isInProcess = spec.status === 'In process';
    const cardBorderColor = isInProcess ? 'primary.main' : 'transparent';
    const cardOpacity = spec.status === 'Done' ? 0.5 : 1;

    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            sx={{
                borderColor: cardBorderColor,
                borderWidth: '1px',
                borderStyle: 'solid',
                opacity: cardOpacity,
                width: '90%',
                marginLeft: '5%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'secondary.main',
                color: 'white',
            }}
        >
            <CardContent >
                <Grid container spacing={3} style={{position: 'relative', minHeight: '110px'}}>
                    <h4 style={{color: '#F6C927'}}>-   Title:</h4>
                    <Grid item xs={12} style={{position: 'absolute', top: '20px', left: '0'}}>
                        <Typography sx={{
                            fontSize: '25px', position: 'relative', display: 'inline-block',
                            maxWidth: '350px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                        }}>{spec.title}</Typography>
                    </Grid>


                    <Grid item xs={12} style={{position: 'absolute', top: '0', right: '0'}}>

                        <Grid container spacing={3} justifyContent="">
                            <StatusButton spec={spec} renderList={renderList} isInProcess={isInProcess}/>
                            <Grid item>
                                <ExpandButton expanded={expanded} setExpanded={setExpanded}/>
                                <EditButton spec={spec} renderList={renderList}/>
                                <DeleteButton spec={spec} renderList={renderList}/>
                            </Grid>
                        </Grid>
                        <h4 style={{
                            position: 'absolute',
                            bottom: '-90',
                            right: '100',
                            marginTop: '0%',
                            color: '#F6C927'
                        }}>Participants:</h4>
                        <Grid style={{position: 'absolute', bottom: '-80', right: '0'}}>
                            <AvatarGroup>
                                {spec.participants.map((person, index) => (
                                    <Avatar key={index} alt={person.lastName}
                                            sx={{bgcolor: '#121231', color: '#F6C927', marginTop: '6px'}}>
                                        {person.avatar}
                                    </Avatar>
                                ))}
                            </AvatarGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Grid item xs={12} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                        <h4 style={{ color: '#F6C927' }}>Description:</h4>
                        <Typography sx={{ fontSize: '12px' }}>
                            <Grid item xs={12}>
                                <div dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(spec.content)) }} />
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} justifyContent="flex-start">
                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column' , height: '200px', width: '100%'}}>
                            <h4 style={{ color: '#F6C927' }}>KPIs:</h4>
                            <div style={{display: 'relative', flexDirection: 'column'}}>
                                {spec.kpis.map((item, index) => (
                                    <Typography key={index}>
                                        <KpiItem
                                            key={index}
                                            id={item._id}
                                            onDelete={null}
                                            kpiList={spec.kpis}
                                            setKpiList={null}
                                        />
                                    </Typography>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>
    );
}
