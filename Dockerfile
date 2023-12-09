FROM node:18-alpine

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm run install 

RUN npm run start

EXPOSE 4200
