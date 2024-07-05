FROM node:20-alpine3.19

WORKDIR /usr/local/app

COPY package.json package-lock.json ./

RUN npm ci

COPY javascript.js dog.jpg ./

EXPOSE 3000

RUN adduser -D app

USER app

CMD ["node", "javascript.js"]