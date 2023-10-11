const Todos = require("./models");
exports.greetTodo = (req, res, next)=>{
    return res.render("greeting.ejs");
}
exports.getTodoList = (req,res,next)=>{
    Todos.find().then(todoListData =>{
        return res.render("attendance.ejs", {"todos": todoListData})
    })
}
exports.createTodo = (req, res,next)=>{
    const todos = req.body.todos;
    const dueDate = req.body.dueDate;
    const priority = req.body.priority;
    const todo = new Todos({
        todos: todos,
        dueDate: dueDate,
        priority: priority
    })
    todo
    .save()
    .then(newTodo=>{
        //return res.redirect("/members");
        res.status(201).json({
            message:"New Member",
            newTodoInfo: newTodo
        })
    })
    .catch(err=>console.log('err', err))
}
exports.deleteTodo = (req, res, next) => {
    const todoId = req.params.todoId;
    Todos.findByIdAndRemove(todoId)
        .then(() => {
            res.redirect('/members');
        })
        .catch(err => console.log(err));
};