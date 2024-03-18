#!/bin/bash

# Aplicar as migrações
npx prisma migrate deploy

# Iniciar o servidor
npm start
