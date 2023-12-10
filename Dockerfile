FROM node:latest

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm install 

RUN npm install ng 

RUN npm install -g @angular/cli

COPY . /app/

RUN npm run build:ssr

CMD ["npm", "run", "start"]

EXPOSE 4200
