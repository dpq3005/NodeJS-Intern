const articleController = require('../controller/article.controller');
const { validation } = require('../validation/article.validation');

const articleRoute = [
  {
    method: "PUT",
    path: '/articles/update/{id}',
    config: {
      description: 'Update article'
    },
    handler: articleController.updateArticleContentByUser
  }]

module.exports = articleRoute;