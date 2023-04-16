import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient, User, Coin, Transaction } from '@prisma/client';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const prisma: PrismaClient = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.get('/api/fetchTransactions', async (req: Request, res: Response) => {
    const username = req.query.user as string;
    const coinname = req.query.coin as string;

    // TODO validate these params
    if (!username || !coinname) {
        return res.status(400).send('User and coin query parameters are required.');
    }

    const [user, coin] = await Promise.all([
        prisma.user.findFirst({ where: { name: username as string }}),
        prisma.coin.findFirst({ where: { name: coinname as string }})
    ]);

    try {
        const transactions: Transaction[] = await prisma.transaction.findMany({
            where: {
                owner: user as User,
                type: coin as Coin
            }
        });

        console.log(`Found ${transactions.length} transactions for user ${username} and coin ${coinname}`);
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
})

app.get('/api/fetchUserCoins', async (req: Request, res: Response) => {
    const username = req.query.user as string;

    if (!username) {
        return res.status(400).send('User query parameter is required.');
    }

    const user = await prisma.user.findFirst({ where: { name: username as string }});

    try {
        const coins: { type: { name: string }}[] = await prisma.transaction.findMany({
            where: { owner: user as User },
            distinct: ['typeId'],
            select: {
                type: true
            }
        })

        console.log(`Found ${coins.length} types of coins in transactions for user ${username}`);
        res.json(coins);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
})

app.listen(port, () => {
    console.log(`[SERVER]: Server is running at localhost:${port}`);
});