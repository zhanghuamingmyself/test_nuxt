import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function createTest() {
    const test = await prisma.test.create({
        data: {
            username: 'John',
            email: 'john@example.com'
        }
    });

    return test;
}