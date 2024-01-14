# Server

## Installation

```shell
cd server
cp .env.template .env
```

```shell
npm i
```

```shell
docker run -d -p 27017:27017 --name mongodb -v data:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest
```

## Running

```shell
npm run build
npm start
```
