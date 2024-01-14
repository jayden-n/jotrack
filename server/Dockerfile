FROM node:20

WORKDIR /server

COPY package*.json ./

RUN npm install -g typescript ts-node
RUN npm install

COPY . .

EXPOSE 8000

RUN npm run build
CMD ["npm", "start"]
