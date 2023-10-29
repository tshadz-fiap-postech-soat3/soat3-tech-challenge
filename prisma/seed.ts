import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.orderItems.deleteMany();
    await prisma.product.deleteMany();
    await prisma.order.deleteMany();
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
    });

    await prisma.customer.createMany({
        data: [
            {
                id: 'cust-1',
                name: 'Customer-1',
                cpf: '12345678901'
            },
            {
                id: 'cust-2',
                name: 'Customer-2',
                cpf: '12345678902'
            },
            {
                id: 'cust-3',
                name: 'Customer-3',
                cpf: '12345678903'
            },
        ]
    });

    await prisma.product.createMany({
        data: [
            {
                id: 'prod-1',
                name: 'X-Burguer',
                description: 'Pão, carne, queijo, alface, tomate e molho',
                categoryId: 'cat-1',
                price: 20,
            },
            {
                id: 'prod-2',
                name: 'X-Bacon',
                description: 'Pão, carne, bacon, queijo, alface, tomate e molho',
                categoryId: 'cat-1',
                price: 30,
            },
            {
                id: 'prod-3',
                name: 'Pudim',
                description: 'Pudim de leite ninho',
                categoryId: 'cat-4',
                price: 10,
            },
            {
                id: 'prod-4',
                name: 'Suco',
                description: 'Suco natural 500 mL',
                categoryId: 'cat-3',
                price: 8,
            },
            {
                id: 'prod-5',
                name: 'Bata frita',
                description: 'Porção generosa de batata frita',
                categoryId: 'cat-2',
                price: 10,
            },
        ]
    })

    await prisma.order.createMany({
        data: [
            {
                id: 'order-1',
                status: 'Aguardando Pagamento',
                customerId: 'cust-1',
                price: 100,
            },
            {
                id: 'order-2',
                status: 'Em Preparo',
                customerId: 'cust-2',
                price: 50,
            },
        ]
    })

    await prisma.orderItems.createMany({
        data: [
            {
                id: 'order-item-1',
                orderId: 'order-1',
                productId: 'prod-1',
                quantity: 2,
            },
            {
                id: 'order-item-2',
                orderId: 'order-1',
                productId: 'prod-2',
                quantity: 3,
            },
            {
                id: 'order-item-3',
                orderId: 'order-2',
                productId: 'prod-3',
                quantity: 5,
            },
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
