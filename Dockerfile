FROM node:16.16.0-slim

WORKDIR /home/node/app

USER node

CMD [ "tail", "-f", "/dev/null" ]