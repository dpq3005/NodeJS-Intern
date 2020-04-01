const { create, list, deleteById, updateById } = require('./../model/todoList');

const createTodoItem = async (item) => {
  try {
    const todoItem = await create({
      item
    });

    return todoItem;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const listTodoItem = async (user) => {
  // if (!user) {
  //   return 'Nothing Todo';
  // }
  return await list();
}

const deleteTodoItem = async (id) => {
  return await deleteById(id);
}

const updateTodoItem = async (id, item) => {
  return await updateById(id, item);
}

module.exports = {
  createTodoItem,
  listTodoItem,
  deleteTodoItem,
  updateTodoItem
};
