import React from 'react';
import { useNavigate } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

import {
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Avatar,
    AvatarGroup,
    Select,
    MenuItem,
    Collapse,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function SpecItem({ spec, renderList }) {
    const isInProcess = spec.status === 'In process';
    const cardBorderColor = isInProcess ? 'primary.main' : 'transparent';
    const statusColor = isInProcess ? '#ffffff' : 'primary.main';
    const cardOpacity = spec.status === 'Done' ? 0.5 : 1;
    const navigate = useNavigate();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDelete = async (idToDelete) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete/${idToDelete}`);
            renderList();
            console.log('Spec deleted successfully');
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    const onClickDelete = () => {
        let check = prompt('Are you sure you want to delete this spec? yes or no', 'yes');
        if (check === 'yes') {
            handleDelete(spec._id);
        }
    };

    const handleEdit = () => {
        navigate('/spec/stepper', { state: { spec } });
    };

    const handleEditStatus = async (event) => {
        try {
            await axios.put(`${import.meta.env.VITE_BACKEND_URL}/status/${spec._id}`, {
                status: event.target.value,
            });
            renderList();
        } catch (error) {
            console.error('Error updating:', error);
        }
    };

    return (
        <Card
            sx={{
                borderColor: cardBorderColor,
                borderWidth: '1px',
                borderStyle: 'solid',
                opacity: cardOpacity,
                width: '90%',
                height: '30%',
                marginLeft: '5%',
                display: 'flex', // Enable flex layout
                flexDirection: 'column', // Set the flex direction to column
                bgcolor: 'secondary.main',
                color: 'white',
            }}
        >
            <CardContent sx={{ flex: '1' }}>
                <Grid container spacing={3} style={{ position: 'relative' }}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontSize: '25px' }}>{spec.title}</Typography>
                        <Typography sx={{ marginBottom: '60px', fontSize: '12px' }}>
                            <div dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(spec.content)) }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ position: 'absolute', top: '0', right: '0' }}>
                        <Grid container spacing={3} justifyContent="flex-end">
                            <AvatarGroup sx={{ width: '15%', marginTop: '25%', marginRight: '-60%' }}>
                                {spec.participants.map((person, index) => (
                                    <Avatar key={index} alt={person.lastName} sx={{ bgcolor: '#121231', color: '#F6C927' }}>
                                        {person[0]}
                                    </Avatar>
                                ))}
                            </AvatarGroup>
                            <Grid item >
                                <Select
                                    value={spec.status}
                                    onChange={handleEditStatus}
                                    sx={{
                                        height: '50%',
                                        color: statusColor,
                                        '& .MuiSelect-icon': {
                                            color: statusColor,
                                        },
                                    }}
                                >
                                    <MenuItem value="In process">In process</MenuItem>
                                    <MenuItem value="active">active</MenuItem>
                                    <MenuItem value="Done">Done</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={handleExpandClick}
                                    sx={{
                                        color: 'white',
                                        height: '53',
                                        width: '53',
                                        minWidth: '0px',
                                        borderRadius: '50%',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: '#F6C927',
                                        margin: '0 10px',
                                        '&:hover': { bgcolor: '#F6C927' },
                                    }}
                                >
                                    {expanded ? '-' : '+'}
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    sx={{
                                        color: 'white',
                                        height: '53',
                                        width: '53',
                                        minWidth: '0px',
                                        borderRadius: '50%',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: '#F6C927',
                                        margin: '0 10px',
                                        '&:hover': { bgcolor: '#F6C927' },
                                    }}
                                    onClick={handleEdit}
                                >
                                    <EditIcon />
                                </Button>
                                <Button
                                    onClick={onClickDelete}
                                    variant="text"
                                    size="small"
                                    sx={{
                                        color: 'white',
                                        height: '53',
                                        width: '53',
                                        minWidth: '0px',
                                        borderRadius: '50%',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: '#F6C927',
                                        margin: '0 10px',
                                        '&:hover': { bgcolor: '#F6C927' },
                                    }}
                                >
                                    <DeleteIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Additional content goes here.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
