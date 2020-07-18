FROM node:latest
MAINTAINER luizfoli

ENV NODE_PORT=9090
COPY ./auth-api /school-lab/auth-api
WORKDIR /school-lab/auth-api
RUN npm install
ENTRYPOINT npm dev
EXPOSE $NODE_PORT