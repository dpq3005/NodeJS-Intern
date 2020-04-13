const commentRepository = require('../repository/comment.repository');

const getListComment = async (request, h) => {
  return commentRepository.listComment;
}

const getNumberVotesPerComment = async (request, h) => {
  const { id } = request.params;

  return commentRepository.getnumberOfVotesPerComment(id);
}

const getAllCommentsOfUser = async (request, h) => {
  const { userId } = request.params;

  return commentRepository.getAllCommentOfUser(userId);
}

const deleteCommentVotesOfUser = async (request, h) => {
  const { userId } = request.params;

  return commentRepository.deleteAllCommentOfUser(userId);
}

module.exports = {
  getListComment,
  getNumberVotesPerComment,
  getAllCommentsOfUser,
  deleteCommentVotesOfUser
}