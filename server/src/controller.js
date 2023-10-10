const Todo = require('./models');


exports.getTodoList = (req, res, next) => {
    Todo.find().then(todoListData => {
        return res.render('todoList.ejs',{'todos':todoListData});
    });
}

exports.deleteTodo = (req, res, next) => {
    Todo.deleteMany().then(todoListData => {
        return res.render('todoList.ejs',{'todos':todoListData});
    });
}

exports.createTodo = (req, res, next) =>{
    const string = req.body.string;
    const date = req.body.date;
    const num = req.body.num;

    const todo = new Todo({
        string: string,
        date: date,
        num: num
    });

    todo
    .save()
    .then(newTodo =>{
        res.status(201).json({
            message: "New todo successfully created",
            newTodoInfo: newTodo
        })
    })
    .catch(err => console.log('err',err));
}