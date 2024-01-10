import React from 'react';
import SpecList from '../specPage/specList.jsx';
import { Container, Grid } from '@mui/material';


function App() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SpecList />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;


