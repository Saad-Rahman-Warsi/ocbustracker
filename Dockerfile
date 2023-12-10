FROM node:lts-alpine AS build

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm install ng 

RUN npm install @angular/cli

RUN npm install 

COPY  . /app/

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 4200
