const Todo = require('../models/todoModel');

const todoController = {
    getTodos: (req, res) => {
        Todo.getAll((err, results) => {
            if (err) throw err;
            // Render halaman index dan kirimkan data todos ke dalam layout
            res.render('index', { todos: results, body: 'index' }); // Menambahkan 'body'
        });
    },
    addTodo: (req, res) => {
        const { title } = req.body;
        Todo.add(title, (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    },
    deleteTodo: (req, res) => {
        const { id } = req.params;
        Todo.delete(id, (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    },
    updateTodo: (req, res) => {
        const { id } = req.params;
        const { completed } = req.body;
        Todo.update(id, completed === 'true', (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    }
};

module.exports = todoController;
