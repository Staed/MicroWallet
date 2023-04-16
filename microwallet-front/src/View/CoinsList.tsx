import React, { useState, useEffect } from 'react';
import { Coin } from '../prisma_public/schema'
import { Accordion, AccordionSummary, AccordionDetails, Typography, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TransactionsList from './TransactionsList';

const baseUrl: string = 'http://localhost:8080/api/fetchUserCoins';

export default function CoinsList({user}: {user: string}): JSX.Element {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCoin() {
            await fetch(`${baseUrl}?user=${user}`)
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
        <>
            {coins.map((coin: Coin, index: number) => {
                return (
                    <Accordion key={`accordion${user}${index}`}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}content`}
                            id={`panel${index}-header`}>
                            <Typography>{coin.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TransactionsList user={user} coin={coin.name}/>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
}