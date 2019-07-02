FROM node:latest
RUN mkdir /src
WORKDIR /src
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 3000
RUN npm install nodemon -g
CMD [ "nodemon", "./bin/www" ]