module.exports = function (app) {
  const todo = require("./controller");

  app.get("/to-dos", todo.getTodoList);
  app.post("/to-dos", todo.createTodo);
  app.delete('/to-dos/:id', todo.deleteTodo);  
};
