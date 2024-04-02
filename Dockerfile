FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN yarn cache clean

COPY . .

EXPOSE 8080

CMD ["yarn", "docker"]
