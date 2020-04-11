const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: String,
  age: String,
  occupation: String
},
  {
    collection: 'User'
  }
);

const model = mongoose.model('User', UserSchema);

module.exports = {
  model
}