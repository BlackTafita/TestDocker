FROM node:latest

RUN mkdir /app

COPY package.json  /app

COPY ./products /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start-products"]