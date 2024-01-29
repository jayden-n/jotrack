# JoTrack

## Installation

1. Make a duplicate of `.env.template` in the `server` directory.

   ```shell
   cp server/.env.template server/.env
   ```

2. Change the fields in the `.env` file for security purposes.

   ```makefile
   # ...
   # jwt
   JWT_SECRET="your_jwt_secret"
   ```

## Running

1. Build application docker images and run them as docker containers.

   ```shell
   docker-compose -f docker-compose.yml -p jotrack up -d
   ```
