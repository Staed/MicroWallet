import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

import FetchCoins from '../Controller/FetchCoins';

export default function Wallet({user}: {user: string}) {
    return(
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="lightblue"
            spacing={2}>
            <Box m="a">
                <Typography variant="h2">USER NAME</Typography>
            </Box>
            <Divider />
            <Grid xs={8} sm={6} md={4}>
                <FetchCoins user={user} />
            </Grid>
        </Grid>
    );
}