const commentController = require('../controller/comment.controller');
const { validation, deleteValidation } = require('../validation/comment.validation');

const commentRoute = [
  {
    method: "GET",
    path: '/comments/list',
    config: {
      description: 'Get all comments'
    },
    handler: commentController.getListComment
  },
  {
    method: "GET",
    path: '/comments/{commentId}',
    config: {
      description: 'Get number of votes per comment'
    },
    handler: commentController.getNumberVotesPerComment
  },
  {
    method: "GET",
    path: '/comments/votes/{userId}',
    config: {
      description: 'Get number of votes per comment'
    },
    handler: commentController.getAllCommentsOfUser

  },
  {
    method: "DELETE",
    path: '/comments/{userId}',
    config: {
      description: 'Delete all comments of user',
      validate: deleteValidation.all
    },

    handler: commentController.deleteCommentVotesOfUser
  }
];

module.exports =
  commentRoute
