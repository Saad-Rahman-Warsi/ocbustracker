FROM node:19-alpine

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm install 

CMD ["ng", "serve"]

EXPOSE 4200
