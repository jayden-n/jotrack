# JoTrack

## Development Environment

### Installation & Running

1. Setup everything and run `docker-compose` to get started with the application.

   ```shell
   npm run start:dev
   ```

## Production Environment

### Installation

1. Make a duplicate of `.env.template` in the `server` directory.

   ```shell
   npm run copy:env:template
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

1. Restart the application

   ```shell
   npm run docker:dev:restart
   ```