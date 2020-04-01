const todoItemService = require('./../service/todo.service')

const todoItemCreateController = async (request, h) => {
  const { item, user } = request.payload;
  if (!user) {
    return 'Please sign in!';
  }
  return await todoItemService.createTodoItem({
    item
  });
}

const todoItemListController = async (request, h) => {

  return await todoItemService.listTodoItem();
}

const todoItemDeleteController = async (request, h) => {
  const { id } = request.params;
  return await todoItemService.deleteTodoItem(id);
}

const todoItemUpdateController = async (request, h) => {
  const { id } = request.params;
  const item = request.payload;
  console.log(item);
  return await todoItemService.updateTodoItem(id, item);
}

module.exports = { todoItemCreateController, todoItemListController, todoItemDeleteController, todoItemUpdateController };
