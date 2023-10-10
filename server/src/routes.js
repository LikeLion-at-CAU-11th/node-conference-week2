module.exports = function (app) {
  const todoMethod = require("./controller");

  app.get("/todos", todoMethod.getToDoList);
  app.post("/todos", todoMethod.createToDo);
  app.delete("todos/:id", todoMethod.deleteToDo);
};
