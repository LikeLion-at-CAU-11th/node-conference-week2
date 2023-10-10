module.exports = function(app){
    const todos = require('./controller');

    app.get("/todos", todos.getTodoList);
    app.post("/todos", todos.createTodo);
    app.delete("/todos", todos.deleteTodo);
};