FROM node:20-alpine

LABEL authors="jeromedelosreyes"

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5173
# change for production ig
CMD ["npm", "run", "dev"]
