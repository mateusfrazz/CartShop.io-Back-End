const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Agora você expõe a pasta Images como endpoint público
server.use('/Images', express.static(path.join(__dirname, 'Images')));
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
