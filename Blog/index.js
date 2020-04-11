const Hapi = require('@hapi/hapi');
const routes = require('./route/index');
const mongoose = require('mongoose');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  server.route(routes);
  await server.start();

  mongoose.connect(server, { useNewUrlParser: true, useUnifiedTopology: true });
};

init();