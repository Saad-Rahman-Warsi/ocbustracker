### STAGE 1: Build ###
FROM node:lts-alpine AS build

#### make the 'app' folder the current working directory
WORKDIR /app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY . . 



#### install project dependencies
RUN npm install 

#### copy things
RUN npm run build --prod

#### generate build --prod



### STAGE 2: Run ###
FROM nginx:alpine

#### copy nginx conf


#### copy artifact build from the 'build environment'
COPY  /dist/ /usr/share/nginx/html

EXPOSE 80

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]
