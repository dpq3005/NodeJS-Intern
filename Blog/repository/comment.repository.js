const model = require('../model/Comments');

const listComment = () => model.find();

const getnumberOfVotesPerComment = (commentID) => {
  const comment = model.findById(commentID);
  const votes = comment.userVoteID;
  const count = 0;
  for (var i = 0; i < votes.length; i++) {
    count++;
  }
  return count;
}

const getAllCommentOfUser = (user) => {
  const listComment = model.find({ userID: user });
  return listComment;
}

const deleteAllCommentOfUser = (user) => {
  const deletedComment = model.deleteMany({ userID: user });
  return deletedComment;
}

module.exports = {
  listComment,
  getnumberOfVotesPerComment,
  getAllCommentOfUser,
  deleteAllCommentOfUser
}