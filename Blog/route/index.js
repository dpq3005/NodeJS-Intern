const commentRoute = require('./comment.route');
const articleRoute = require('./article.route');

const routes = [
  ...commentRoute,
  ...articleRoute

]
  ;

module.exports =
  routes
