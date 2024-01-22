FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

FROM node:20

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

ENV SERVER_PORT=8000
ENV DATABASE_URL=postgresql://admin:password@postgresql-jotrack:5432/postgresql-jotrack?schema=public
ENV JWT_SECRET=your_jwt_secret

EXPOSE 8000

CMD [  "npm", "run", "start:migrate:prod" ]
