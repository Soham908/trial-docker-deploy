FROM node:21.7.3-alpine3.20

WORKDIR /second-app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]