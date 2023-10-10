module.exports = function(app){
    const member = require("./controller");
    app.get("/", member.greetTodo);
    app.get("/members", member.getTodoList);
    app.post("/members", member.createTodo);
}