FROM node:latest
RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
RUN npm install
COPY . .
EXPOSE 3000
RUN npm install nodemon -g
CMD [ "nodemon", "./bin/www" ]