FROM node:20-alpine

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm install 

CMD ["npm", "start"]

EXPOSE 4200
