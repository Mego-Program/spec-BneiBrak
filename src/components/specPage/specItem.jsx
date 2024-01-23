import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';

import {Card, CardContent, Typography, Grid, Avatar,
    AvatarGroup, Collapse} from '@mui/material';

import DeleteButton from "../buttons/DeleteButton.jsx";
import StatusButton from "../buttons/StatusButton.jsx";
import EditButton from "../buttons/EditButton.jsx";
import ExpandButton from "../buttons/ExpandButton.jsx";


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
                height: expanded ? '100%' : '50%',
                marginLeft: '5%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'secondary.main',
                color: 'white',
            }}
        >
            <CardContent >
                <Grid container spacing={3} style={{ position: 'relative' }}>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontSize: '25px' }}>{spec.title}</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{ position: 'absolute', top: '0', right: '0' }}>

                        <Grid container spacing={3} justifyContent="">
                            <StatusButton spec={spec} renderList={renderList} isInProcess={isInProcess}/>
                            <Grid item>
                                <ExpandButton expanded={expanded} setExpanded={setExpanded}/>
                                <EditButton spec={spec} renderList={renderList}/>
                                <DeleteButton spec={spec} renderList={renderList}/>
                            </Grid>
                        </Grid>

                        <AvatarGroup >
                            {spec.participants.map((person, index) => (
                                <Avatar key={index} alt={person.lastName}
                                        sx={{ bgcolor: '#121231', color: '#F6C927', marginTop: '10px'}}>
                                    {person.avatar}
                                </Avatar>
                            ))}
                        </AvatarGroup>
                    </Grid>
                </Grid>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: '60px', fontSize: '12px' }}>
                        <Grid item xs={12}>
                            <div dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(spec.content)) }} />
                        </Grid>
                    </Typography>
                </CardContent>
            </Collapse>

        </Card>
    );
}
