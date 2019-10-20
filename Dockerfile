FROM node:12.10.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV CI=1

RUN npm ci

COPY . .

RUN npm run build
