const Todo = require("./models");

exports.getTodoList = (req, res, next) => {
  Todo.find().then((todoListData) => {
    return res.render('todo.ejs',{todos:todoListData});
  });
};

exports.createTodo = (req, res, next) => {
  const content = req.body.content;
  const deadLine = req.body.deadLine;
  const priority = req.body.priority;

  const todo = new Todo({
    content: content,
    deadLine: deadLine,
    priority: priority,
  });

  todo
    .save()
    .then((newTodo) => {
      // return res.redirect('/to-dos');
      return res.status(200).json({
        message: "투두 생성 완료",
        newTodoInfo: newTodo,
      });
    })
    .catch((err) => console.log("err", err));
};

exports.deleteTodo = (req, res) => {
  const toDoId = req.params.id;

  Todo.findByIdAndDelete(toDoId)
    .then((deletedTodo) => {
      if (!deletedTodo) {
        return res.status(400).json({
          message: "해당 Todo 없음",
        });
      }
      return res.status(200).json({
        message: "Todo 삭제 완료",
        deletedTodoInfo: deletedTodo,
      });
    })
    .catch((err) => console.log("err", err));
};
