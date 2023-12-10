FROM node:lts-alpine AS build

COPY package.json /app/
COPY . /app/

WORKDIR /app

CMD ["npm", "install", "ng"]

CMD ["npm","install", "-g", "@angular/cli"]

CMD [ "npm" ,"install" ]

CMD ["npm", "run", "build"]

CMD ["npm", "run", "start"]

EXPOSE 4200
