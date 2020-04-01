const {
  userCreateController,
  userListController,
  signInController
} = require('./../controller/user.controller');
const basicResponse = require('./../response');
const {
  validations,
  deleteValidation
} = require('./../validation/user.validation');

const userRoute = [
  {
    method: 'GET',
    path: '/users',
    config: {
      tags: ['api'],
      description: 'Get records in CollectionName',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userListController
  },
  {
    method: 'POST',
    path: '/register',
    config: {
      tags: ['api'],
      description: 'Create new record in CollectionName',
      plugins: {
        'hapi-swagger': {
          payloadType: 'form',
          responses: basicResponse
        }
      }
    },
    handler: userCreateController
  },
  {
    method: 'POST',
    path: '/signin',
    config: {
      tags: ['api'],
      description: 'Delete record by id in CollectionName',
      validate: validations.name,
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: signInController
  }
];

module.exports = userRoute;
