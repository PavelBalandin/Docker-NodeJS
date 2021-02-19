FROM node:12.18.1

WORKDIR /usr/src/app/
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/

EXPOSE 3001

CMD ["node", "start"]

# docker build -t node-proxy .

# docker run --rm --name web-proxy -p 3001:3001 node-proxy