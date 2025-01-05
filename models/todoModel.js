const db = require('./database');

const Todo = {
    getAll: (callback) => {
        const query = 'SELECT * FROM todos';
        db.query(query, callback);
    },
    add: (title, callback) => {
        const query = 'INSERT INTO todos (title) VALUES (?)';
        db.query(query, [title], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM todos WHERE id = ?';
        db.query(query, [id], callback);
    },
    update: (id, completed, callback) => {
        const query = 'UPDATE todos SET completed = ? WHERE id = ?';
        db.query(query, [completed, id], callback);
    }
};

module.exports = Todo;
