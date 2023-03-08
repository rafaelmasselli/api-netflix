<h1 align="center"> Api do Netflix </h1>

<div align="center">

![Gif do netflix](/.github/netflix-intro-netflix.gif)

</div>

## 📝 Descrição

<p> O projeto consiste no desenvolvimento do back-end do site de streaming Netflix, utilizando autenticação com token JWT. Para a implementação, foi utilizado o framework NestJS e o banco de dados PostgreSQL, que está hospedado em ambiente Docker. <p/>

## 🤖 Requisitos

- [Docker](https://docs.docker.com)
- [NodeJS](https://nodejs.org/en/)
- [Nest](https://nestjs.com)

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias

- [Nest Ts](https://nestjs.com)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jwt](https://jwt.io/introduction)
- [Prisma](https://www.prisma.io/docs/)

### 🚀 Iniciando o projeto

Clone o projeto e acesse a pasta do mesmo

```powershell
## Clonando o projeto
$ git clone https://github.com/rafaelmasselli/api-netflix
## Entrando na pasta
cd api-netflix
```

#### Instalando e iniciando o projeto

```powershell
# Instale as dependências
$ npm i
```

### Conectando o projeto com o banco

<p>Crie um arquivo chamando .env<p/>

![Criando um arquivo .env](/.github/env.png)

<p> Agora copie e cole o exemplo do arquivo .env.exemple e cole no .env<p/>

<p>Agora inicie o docker e o prisma<p/>

```powershell
# Iniciando o banco de dados no docker
$ docker compose up
# Criando o schema no banco de dados
$ npx prisma migrate dev
```

### E assim ira rodar o banco do docker

![Imagem do docker rodando](/.github/DockerRodando.png)

### Agora inicie o projeto

```powershell
$ npm run start:dev
```

<p> E o projeto ira iniciar com todos as rotas da api <p/>

![terminal do back-end](/.github/BackEndRodando.png)
