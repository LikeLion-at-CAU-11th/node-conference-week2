const ToDo = require("./models");

exports.getToDoList = (req, res, next) => {
  ToDo.find().then((todoListData) => {
    return res.render("todolist.ejs", { todoList: todoListData });
    /*
        데이터 전송
        return res.send({
            message: "GET member list",
            memberList : memberListData
        });
      */
  });
};

exports.createToDo = (req, res, next) => {
  const work = req.body.work;
  const date = req.body.date;
  const priority = req.body.priority;

  const todo = new Todo({
    work: work,
    date: date,
    priority: priority,
  });

  todo
    .save()
    .then((newTodo) => {
      return res.status(201).send({
        message: "new ToDo registered",
        newTodoInfo: newTodo,
      });
      // return res.redirect("/members");
      // 서버에서 흐름 제어 시 데이터 전송 대신 redirect로 연결
    })
    .catch((err) => console.log("err", err));
};

exports.deleteToDo = (req, res, next) => {
  const todoId = req.params.id;

  Todo.findByIdAndRemove(todoId)
    .then(() => {
      return res.status(201).send({
        message: "ToDo deleted successfully",
      });
    })
    .catch((err) => {
      res.status(501).send(err.message);
    });
};
