<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Tech Challenge - Software Architecture

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#running">Como rodar a aplicação</a> &#xa0; | &#xa0;
  <a href="#observacoes">Observações</a> &#xa0; | &#xa0;
  <a href="#desenvolvedores">Desenvolvedores</a>
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

MYSQL_HOST = "localhost"
MYSQL_DATABASE = "fastfood"
MYSQL_USER = "root"
MYSQL_PASSWORD = "admin"
MYSQL_PORT = 3306

# Iniciar o projeto
$ docker compose up -d --build

# Para criar tabelas
$ npx prisma migrate dev --name init

# Para popular as tabelas
$ npm run seed

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger


### Após rodar o projeto, acesse http://localhost:8080/swagger
