# JoTrack

## Installation

1. Navigate to the `server` directory and make a duplicate of `.env.template`.

   ```shell
   cd server && cp .env.template .env
   ```

2. Initialize a database migration

   ```shell
   npx prisma migrate dev
   ```

## Running

1. Build application docker images and run them as docker containers.
   ```shell
   docker-compose -f docker-compose.yml -p jotrack up -d
   ```
