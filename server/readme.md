# Server

## Installation

1. Go to server directory and make a duplicate of .env.template.
    ```shell
    cd server
    cp .env.template .env
    ```

2. Change `MONGODB_NAME` in .env file according to this configuration.
    ```makefile
    # mongodb container
    MONGODB_USERNAME=admin
    MONGODB_PASSWORD=password
    MONGODB_NAME=localhost # change
    ```

3. Install dependencies.
    ```shell
    npm i
    ```
4. Pull and run a Mongo Docker image.
    ```shell
    docker run -d -p 27017:27017 --name mongodb -v ./data:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest
    ```

## Running

1. Compile TypeScript into JavaScript and start the application.
    ```shell
    npm run build && npm start
    ```