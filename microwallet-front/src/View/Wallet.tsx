import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import FetchTransactionHistory from '../Controller/FetchTransactionHistory';

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
            <Grid item xs={8} sm={6} md={4}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                            <Typography>Bitcoin</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FetchTransactionHistory user={user} coin="Bitcoin" />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel2a-header">
                            <Typography>Etherum</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FetchTransactionHistory user="Staed" coin="Etherum" />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}