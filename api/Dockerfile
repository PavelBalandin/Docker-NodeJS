FROM node:12.18.1

WORKDIR /usr/src/app/
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/

EXPOSE 3000

CMD ["node", "start"]

# docker build -t node-api .

# docker run --rm --name web-api -p 3000:3000 node-api