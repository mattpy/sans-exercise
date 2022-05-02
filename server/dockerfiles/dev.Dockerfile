FROM node:18-alpine3.14

WORKDIR /app

COPY package.json .

COPY tsconfig.json .

RUN npm install

COPY ./src ./src

RUN npm run build

ENV PORT=4000

EXPOSE $PORT

CMD [ "pm2", "start", "build/index.js", "--exp-backoff-restart-delay=100" ]
