const {
  todoItemCreateController,
  todoItemListController,
  todoItemDeleteController,
  todoItemUpdateController
} = require('./../controller/todo.controller');
const basicResponse = require('./../response');
const {
  validations,
  deleteValidation
} = require('./../validation/todo.validation');

const todoRoute = [
  {
    method: 'GET',
    path: '/todo',
    config: {
      tags: ['api'],
      description: 'Get records in CollectionName',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoItemListController
  },
  {
    method: 'POST',
    path: '/todo',
    config: {
      tags: ['api'],
      description: 'Create new record in CollectionName',
      validate: validations.item,
      plugins: {
        'hapi-swagger': {
          payloadType: 'form',
          responses: basicResponse
        }
      }
    },
    handler: todoItemCreateController
  },
  {
    method: 'DELETE',
    path: '/todo/{id}',
    config: {
      tags: ['api'],
      description: 'Delete record by id in CollectionName',
      validate: deleteValidation.id,
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoItemDeleteController
  },
  {
    method: 'PUT',
    path: '/todo/{id}',
    config: {
      tags: ['api'],
      description: 'Update record by id in CollectionName',
      validate: deleteValidation.id,
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoItemUpdateController
  }
];

module.exports = todoRoute;
