const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: String,
  articleID: {
    type: mongoose.Types.ObjectId,
    ref: 'Articles'
  },
  userID: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  userVoteID: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }]
},
  {
    collection: 'Comment'
  }
);



const model = mongoose.model('Comment', CommentSchema);



module.exports = {
  model
}