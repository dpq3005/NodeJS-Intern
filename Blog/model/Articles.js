const mongoose = require('mongoose');

const ArticlesSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  text: String,
  userID: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
},
  {
    collection: 'Articles'
  }
);

const model = mongoose.model('Articles', ArticlesSchema);

module.exports = {
  model
}