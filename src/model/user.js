const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
    },
    todoList: [{
      type: Object,
      ref: 'TodoList'
    }],
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'User'
  }
);

const model = mongoose.model('User', UserSchema);

const list = () => model.find();

const find = (user) => model.findOne({ name: user });

const create = user => model.create(user);


module.exports = {
  model,
  list,
  create,
  find,
  schema: UserSchema
};
