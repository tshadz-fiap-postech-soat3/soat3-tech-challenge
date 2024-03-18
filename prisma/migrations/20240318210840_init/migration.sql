CREATE TABLE `Customer` (
    `id` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Customer_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAtDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAtDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    UNIQUE INDEX `Product_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `createdAtDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAtDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `OrderItems` (
    `id` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

DELETE FROM OrderItems;
DELETE FROM Order;
DELETE FROM Product;
DELETE FROM Category;
DELETE FROM Customer;

INSERT INTO Category (id, name) VALUES
('cat-1', 'Lanche'),
('cat-2', 'Acompanhamento'),
('cat-3', 'Bebida'),
('cat-4', 'Sobremesa');

INSERT INTO Customer (id, name, cpf) VALUES
('cust-1', 'Customer-1', '12345678901'),
('cust-2', 'Customer-2', '12345678902'),
('cust-3', 'Customer-3', '12345678903');

INSERT INTO Product (id, name, description, categoryId, price) VALUES
('prod-1', 'X-Burguer', 'Pão, carne, queijo, alface, tomate e molho', 'cat-1', 20),
('prod-2', 'X-Bacon', 'Pão, carne, bacon, queijo, alface, tomate e molho', 'cat-1', 30),
('prod-3', 'Pudim', 'Pudim de leite ninho', 'cat-4', 10),
('prod-4', 'Suco', 'Suco natural 500 mL', 'cat-3', 8),
('prod-5', 'Bata frita', 'Porção generosa de batata frita', 'cat-2', 10);

INSERT INTO `Order` (id, status, customerId, price) VALUES
('order-1', 'CONCLUDED', 'cust-1', 100),
('order-2', 'PROCESSING', 'cust-2', 50),
('order-3', 'READY_TO_PICKUP', 'cust-1', 100),
('order-4', 'PAYMENT_DUE', 'cust-1', 150),
('order-5', 'PLACED', 'cust-1', 110),
('order-6', 'PROCESSING', 'cust-1', 200);

INSERT INTO OrderItems (id, orderId, productId, quantity) VALUES
('order-item-1', 'order-1', 'prod-1', 2),
('order-item-2', 'order-1', 'prod-2', 3),
('order-item-3', 'order-2', 'prod-3', 5);
