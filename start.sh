#!/bin/ash
npx prisma migrate dev --name init
npx ts-node prisma/seed.ts
npm start
