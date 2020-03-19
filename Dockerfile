FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4000
CMD [ "node", "./build/index.js" ]