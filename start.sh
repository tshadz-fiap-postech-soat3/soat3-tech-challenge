#!/bin/bash

echo "Iniciando migrações..."
# Aplicar as migrações
npx npx prisma migrate dev --name init && npx ts-node prisma/seed.ts
echo "Migrações concluídas."
# Iniciar o servidor
npm start
