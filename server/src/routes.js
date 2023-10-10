const Todo = require("./models");

module.exports = function (app) {
    const todo = require('./controller');

    app.get("/", todo.getTodoList);
    app.post('/add', todo.addTodo);
    app.delete('/delete', todo.deleteTodo);
};