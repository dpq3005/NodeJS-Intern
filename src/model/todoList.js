const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema(
  {
    item: {
      type: Object,
      required: true,
      unique: true
    },
    user: {
      type: Object,
      ref: 'User'
    },
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
    collection: 'TodoList'
  }
);

const model = mongoose.model('TodoList', TodoListSchema);

const list = () => model.find();

const create = item => model.create(item);

const deleteById = id => model.findByIdAndDelete(mongoose.Types.ObjectId(id));

const updateById = (id, newItem) => model.findByIdAndUpdate(mongoose.Types.ObjectId(id), newItem, { new: true }, (err, doc) => {
  if (err) {
    return console.log(err);
  }
  return doc.item = newItem;
});

module.exports = {
  model,
  list,
  create,
  deleteById,
  updateById,
  schema: TodoListSchema
};
