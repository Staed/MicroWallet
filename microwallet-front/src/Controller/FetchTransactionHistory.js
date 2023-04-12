import { useState, useEffect } from 'react';
import { List, ListItem, Grid } from '@mui/material';

const baseUrl = 'http://localhost:8080/api/transactions';

export default function FetchTransactionHistory({user, coin}) {
    const [transactions, setTransactions] = useState([]);

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
                        <Grid xs={4}>{transaction.amount}</Grid>
                        <Grid xs={8}>{transaction.notes}</Grid>
                    </Grid>
                </ListItem>
                );
            })}
        </List>
    );
}