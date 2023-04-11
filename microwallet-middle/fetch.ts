import { PrismaClient } from ".prisma/client";

const prisma: PrismaClient = new PrismaClient();

async function fetch() {
    await prisma.$connect()
    await prisma.user.create({
        data: {
            name: 'Staed'
        }
    });

    const users = await prisma.user.findMany();

    console.log(users);
}

fetch()
    .catch((error) => { throw error })
    .finally(async() => { await prisma.$disconnect() });