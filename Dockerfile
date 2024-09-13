FROM node:16.16.0-slim

WORKDIR /home/node/app

COPY . .

RUN npm install

USER node

CMD ["npm", "start"]