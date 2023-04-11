import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

async function fetch() {
    await prisma.$connect()
    // await prisma.user.create({
    //     data: {
    //         name: 'Staed'
    //     }
    // });
    // await prisma.coin.createMany({
    //     data: [
    //         { name: 'Bitcoin' },
    //         { name: 'Etherum'}
    //     ]
    // })

    const user = await prisma.user.findFirst({
        where: {
            name: 'Staed'
        }
    });
    console.log(user);

    const coin = await prisma.coin.findFirst({
        where: {
            name: 'Bitcoin'
        }
    });
    console.log(coin);

    if (user === undefined || user === null || coin === undefined || coin === null)
        return;
    else {
        // await prisma.transaction.create({
        //     data: {
        //         owner: {
        //             connect: { id: user.id }
        //         } as any,
        //         type: {
        //             connect: { id: coin.id }
        //         } as any,
        //         amount: Number(-2.0) as any,
        //         notes: 'Test Insertion3'
        //     }
        // });

        const transactions = await prisma.transaction.findMany();

        console.log(transactions);
    }
}

fetch()
    .catch((error) => { throw error })
    .finally(async() => { await prisma.$disconnect() });