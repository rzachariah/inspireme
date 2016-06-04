FROM node:argon
WORKDIR /app

ADD package.json /app/
RUN npm install
COPY . /app
ENV PORT 80
EXPOSE 80

ENTRYPOINT [ "node", "main.js" ]