FROM node:10.12.0-alpine


WORKDIR /user/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "start"]