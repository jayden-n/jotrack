# JoTrack

## Development Environment

### Installation & Running

1. Start the client.

   ```shell
   npm run client:start
   ```

2. Start the server and the database.

   ```shell
   npm run server:start
   ```

## Production Environment

### Installation

1. Make a duplicate of `.env.template` in the `server` directory.

   ```shell
   npm run cp:env:template
   ```

2. Change the fields in the `.env` file for security purposes.

   ```makefile
   # ...
   # jwt
   JWT_SECRET="your_jwt_secret"
   ```

### Running

1. Build application docker images and run them as docker containers.

   ```shell
   npm run docker:dev:compose
   ```


## Troubleshooting

### Server Development Environment

1. Stop the server.

2. Remove the database.

   ```shell
   npm run db:dev:rm
   ```

3. Start the server and the database.

   ```shell
   npm run server:start
   ```

### Production Environment

1. Restart the application

   ```shell
   npm run docker:dev:restart
   ```