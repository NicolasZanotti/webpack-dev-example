FROM node:10-alpine

RUN apk add dumb-init

RUN mkdir /app

COPY . /app/

WORKDIR /app
EXPOSE 3000

CMD ["dumb-init", "node", "index.js"]
