const Todo = require('../models/Todo')



exports.createTodo = (req, res, next) => {
    const todo = new Todo(req.body);

    todo.save((err, task) => {
        if (err || !task) {
            return res.status(400).json({
                message: 'something went wrong'
            });
        } else {
            res.json({ task })
        }
    })
}

exports.getAllTodo = (req, res, next) => {

    Todo.find().sort("createAt").exec((err, todos) => {
        if (err || !todos) {
            return res.status(400).json({
                message: 'something went wrong in finding on todos'
            });
        }
        res.json(todos);
    });
}

exports.getTodoId = (req, res, next, todoId) => {
    Todo.findById(todoId).exec((err, todo) => {
        if (err || !todo) {
            return res.status(400).json({
                error: '404 todo not found'
            });
        }
        req.todo = todo;

        next();
    });


}

exports.getTodo = (req, res) => {
    return res.json(req.todo);
}

exports.updateTodo = (req, res, next) => {
    const todo = req.todo;

    todo.task = req.body.task;
    console.log(todo);

    todo.save((err, task) => {
        if (err || !task) {
            return res.status(400).json({
                message: 'something went wrong while updating'
            });
        } else {
            res.json({ task })
        }
    })
}
exports.deleteTodo = (req, res, next) => {
    const todo = req.todo;

    todo.remove((err, task) => {
        if (err || !task) {
            return res.status(400).json({
                message: 'something went wrong while delete'
            });
        } else {
            res.json({
                task_delete: task,
                message: 'Todo deleted successfully'
            });
        }
    })
}