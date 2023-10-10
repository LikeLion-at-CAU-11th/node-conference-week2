const Todo = require("./models");

exports.getTodoList = (req, res, next) => {
    Todo.find().then(todoListData => {
      return res.render("todo.ejs", { todos : todoListData });
      /*
        데이터 전송
        return res.send({
            message: "GET member list",
            memberList : memberListData
        });
      */
    });
}

exports.addTodo = async (req, res)=>{
    // console.log(req.body);
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
        console.log(req.params.id);
        await Todo.findByIdAndRemove(req.params.id);
        res.redirect('/');
    }catch(err){
        console.err(err);
        res.status(500).send(err.message);
    }
}

// exports.createMember = (req, res, next) => {
//     const name = req.body.name;
//     const department = req.body.department;
//     const part = req.body.part;
   
//     const member = new Member({
//         name: name,
//         department: department,
//         part: part
//     });
   
//     member
//     .save()
//     .then(newMember => {
//       return res.status(201).send({
//         message: 'New member successfully created',
//         newMemberInfo : newMember
//       });
//       // return res.redirect("/members");   
//       // 서버에서 흐름 제어 시 데이터 전송 대신 redirect로 연결
//     })
//     .catch(err => console.log('err', err));
//   }

