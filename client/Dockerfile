FROM node:20

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
