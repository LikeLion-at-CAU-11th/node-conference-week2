module.exports = function (app) {
  const member = require("./controllers/member");
  const todo = require("./controllers/todo");

  app.get("/", member.greetMember);
  app.get("/members", member.getMemberList);
  app.post("/members", member.createMember);

  app.get("/todos", todo.getTodoList);
  app.post("/todos", todo.createTodo);
  app.delete("/todos/:id", todo.deleteTodo);
};
