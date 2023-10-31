## Description

Tech Challenge - Software Architecture

<p align="center">
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#running">Como rodar a aplicação</a> &#xa0; | &#xa0;
</p>

<h2 id="tecnologias"> Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

* Typescript
* Node.js
* REST Api
* MySQL
* Swagger
* Nest Js


<h2 id="running"> Como rodar a aplicação </h2>

```bash
# Clone este repositório
$ git clone <https://github.com/tshadz/soat3-tech-chalenge>

# Acesse a pasta do projeto no terminal
$ cd ./soat3-tech-chalenge

# Crie um arquivo `.env` na pasta raíz do projeto com as suas informações:

DATABASE_URL=""
MYSQL_HOST = "fast-food-db"
MYSQL_ROOT_PASSWORD = "root"
MYSQL_DATABASE = "fastfood"
MYSQL_USER = "user"
MYSQL_PASSWORD = "user"
MYSQL_PORT = 3306

# Iniciar o projeto
$ docker compose up -d --build

# Acesse o container
$ docker exec -it fast-food sh

# Dentro do container rode as migrations
$ npx prisma migrate dev --name init && npx ts-node prisma/seed.ts

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```
![docker compose up](https://github.com/tshadz/soat3-tech-chalenge/assets/80704054/7fa20867-2b2a-4bec-8ce2-02d886ce0897)

![docker exec](https://github.com/tshadz/soat3-tech-chalenge/assets/80704054/5ae747af-2371-439c-9bcf-1408cb2f9a6b)


## Test

```bash
# unit tests
$ npm run test

```

## Swagger


### Após rodar o projeto, acesse http://localhost:8080/swagger
![swagger](https://github.com/tshadz/soat3-tech-chalenge/assets/80704054/f5ba4ca7-a7b4-4dc8-9d0c-3c3c2f7cd2c7)
