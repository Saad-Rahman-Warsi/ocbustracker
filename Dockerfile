FROM node:18-alpine

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm install 

RUN npm install ng 

RUN npm install @angular

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 4200
