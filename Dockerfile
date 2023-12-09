FROM node:18-alpine

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm install 

RUN npm install ng

CMD ["ng", "serve"]

EXPOSE 4200
