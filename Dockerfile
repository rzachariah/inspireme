FROM node

EXPOSE 80

COPY . /app
WORKDIR /app

RUN npm install

ENTRYPOINT [ "node", "main.js" ]