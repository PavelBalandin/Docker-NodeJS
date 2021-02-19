docker build -t node-api .
docker build -t node-proxy .
docker run --rm --name web-api -p 3000:3000 node-api
docker run --rm --name web-proxy -p 3001:3001 node-proxy