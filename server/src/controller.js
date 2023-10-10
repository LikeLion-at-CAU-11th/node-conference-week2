const Todo = require("./models");

exports.getTodoList = (req, res, next) => {
  Todo.find().then(todoListData => {
    return res.render("todo.ejs", { todos : todoListData });
  });
}

exports.addTodo = async (req, res)=>{
  const newTodo = new Todo({
      todo: req.body.todo,
      date: req.body.date,
      rank: req.body.rank
  });
  console.log(newTodo);
  try {
      await newTodo.save();
      res.redirect('/');
  } catch(err) {
      console.error(err);
      res.status(500).send(err.message);
  }
}

exports.deleteTodo = async (req, res)=>{
  try{
      await Todo.findByIdAndRemove(req.params.id);
      res.redirect('/');
  }catch(err){
      console.err(err);
      res.status(500).send(err.message);
  }
}

