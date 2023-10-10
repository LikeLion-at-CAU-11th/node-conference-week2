module.exports = function (app) {
    const todo = require('./controller');

    app.get("/", todo.getTodoList);
};