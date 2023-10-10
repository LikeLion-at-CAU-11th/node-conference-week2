const Todo = require("./models");

module.exports = function (app) {
    const todo = require('./controller');

    app.get("/", todo.getTodoList);
    
    app.post('/add', async (req, res)=>{
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
    });
};

// const newTodo = new todo({
        //     todo: req.body.todo,
        //     date: req.body.date,
        //     rank: req.body.rank,
        // });
        // console.log(newTodo);
        // newTodo.save((err)=>{
        //     if(err){
        //         console.log(err);
        //         res.state(500).send();
        //     }
        //     else{
        //         res.redirect('/');
        //     }
        // })

        // const {todo, date, rank} = req.body;
        // const data = await todo.create({todo, date, rank});