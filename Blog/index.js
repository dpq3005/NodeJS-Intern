const Hapi = require('@hapi/hapi');
const routes = require('./route/index');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  server.route(routes);
  await server.start();
  console.log('Server is listening at port 3000')

  const uri = "mongodb://localhost/blog";


  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  } catch (e) {
    console.error(e);
  }
};

init();