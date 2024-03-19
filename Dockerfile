FROM node:18-alpine AS base

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install
COPY --chown=node:node . .
RUN npx prisma generate
RUN npm run build
# Executa as migrações do Prisma
RUN npx prisma migrate deploy --preview-feature

FROM base AS test
ENTRYPOINT ["npm", "test" ]

FROM base AS runtime

USER node
EXPOSE 8080
CMD ["npm", "run", "start"]
