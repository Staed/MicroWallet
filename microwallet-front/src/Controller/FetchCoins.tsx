import React, { useState, useEffect } from 'react';
import { Coin } from '../prisma_public/schema'
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FetchTransactionHistory from '../Controller/FetchTransactionHistory';

const baseUrl: string = 'http://localhost:8080/api/fetchUserCoins';

export default function FetchCoins({user}: {user: string}): JSX.Element {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCoin() {
            const res = await fetch(`${baseUrl}?user=${user}`)
                .then(res => res.json())
                .then(data => {
                    setCoins(data.map((dat: any) => dat.type));
                    setLoading(false);
                })
                .catch(err => console.error(err));
        }

        fetchCoin();
    }, [user]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Grid item xs={8} sm={6} md={4}>
            {coins.map((coin: Coin, index: number) => {
                return (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}content`}
                            id={`panel${index}-header`}>
                            <Typography>{coin.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FetchTransactionHistory user={user} coin={coin.name}/>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Grid>
    );
}