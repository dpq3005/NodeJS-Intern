
const todoRoute = require('./todo.route');
const userRoute = require('./user.route');

const routes = [
  ...todoRoute,
  ...userRoute
];

module.exports = routes;
