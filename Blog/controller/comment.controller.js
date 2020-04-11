const commentService = require('../repository/comment.repository');

const getListComment = async (request, h) => {
  return commentService.listComment;
}

const getNumberVotesPerComment = async (request, h) => {
  const { id } = request.params;

  return commentService.getnumberOfVotesPerComment(id);
}

const getAllCommentsOfUser = async (request, h) => {
  const { userId } = request.params;

  return commentService.getAllCommentOfUser(userId);
}

const deleteCommentVotesOfUser = async (request, h) => {
  const { userId } = request.params;

  return commentService.deleteAllCommentOfUser(userId);
}

module.exports = {
  getListComment,
  getNumberVotesPerComment,
  getAllCommentsOfUser,
  deleteCommentVotesOfUser
}