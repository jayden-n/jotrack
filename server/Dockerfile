FROM node:20

WORKDIR /server

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

RUN npm run build
CMD ["npm", "start"]
