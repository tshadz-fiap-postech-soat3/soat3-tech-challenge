#!/bin/ash

# Aplicar as migrações
npx prisma migrate dev --name init && npx ts-node prisma/seed.ts
# Iniciar o servidor
npm start
