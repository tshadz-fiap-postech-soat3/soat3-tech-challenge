import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.category.deleteMany();
    await prisma.customer.deleteMany();

    await prisma.category.createMany({
        data: [
            {
                id: 'cat-1',
                name: 'Lanche'
            },
            {
                id: 'cat-2',
                name: 'Acompanhamento'
            },            
            {
                id: 'cat-3',
                name: 'Bebida'
            },
            {
                id: 'cat-4',
                name: 'Sobremesa'
            }
        ]
    })
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e)=> {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
