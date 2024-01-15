# JoTrack

## Installation

1. Make a duplicate of .env.template.

   ```shell
   cp server/.env.template server/.env
   ```

2. Change `MONGODB_NAME` in .env file according to this configuration.
   ```makefile
   # mongodb container in a network
   MONGODB_USERNAME=admin
   MONGODB_PASSWORD=password
   MONGODB_NAME=mongodb # change
   ```

## Running
1. Build MERN stack Docker images and run the as Docker containers.
    ```shell
    docker-compose -f docker-compose.yml -p jotrack up -d
    ```
