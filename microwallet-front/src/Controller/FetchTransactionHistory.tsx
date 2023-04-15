import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import { Transaction } from '../prisma_public/schema.tsx';

const baseUrl: string = 'http://localhost:8080/api/transactions';

export default function FetchTransactionHistory({user, coin}: {user: string, coin: string}): JSX.Element {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch(`${baseUrl}?user=${user}&coin=${coin}`)
            .then(res => res.json())
            .then(data => setTransactions(data))
            .catch(err => console.error(err));
    }, [user, coin]);

    return (
        <List>
            {transactions.map(transaction => {
                return (
                <ListItem key={transaction.id}>
                    <Grid container>
                        <Grid item xs={4}>{transaction.amount}</Grid>
                        <Grid item xs={8}>{transaction.notes}</Grid>
                    </Grid>
                </ListItem>
                );
            })}
        </List>
    );
}