const Todo = require("../models/todos");

exports.getTodoList = (req, res, next) => {
  console.log("res.route:", res.req.route);

  Todo.find().then((todoListData) => {
    console.log("todoListData:", todoListData);
    return res.render("todo.ejs", { todos: todoListData });
  });
};

exports.createTodo = (req, res, next) => {
  console.log("res.route create:", res.req.route);
  const title = req.body.title;
  const dueDate = req.body.dueDate;
  const priority = req.body.priority;
  const todo = new Todo({
    title,
    dueDate,
    priority,
  });
  todo
    .save()
    .then(() => res.redirect("/todos"))
    .catch((err) => console.log("DB ERROR:", err));
};

exports.deleteTodo = async function (req, res) {
  console.log("res.route delete:", res.req.route);
  const id = new Object(req.params.id);
  console.log("delete params:", req.params);
  if (!id) {
    res.status(400).send("id 값이 없습니다.");
    return;
  }
  try {
    await Todo.findByIdAndDelete(id);
    return res.redirect("/todos");
  } catch (err) {
    console.log("DELETE API ERROR:", err);
    res.status(404).send("id값이 Database에 없습니다.");
    return;
  }
};
