const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err, result) => {
        if (err) throw err;
        console.log(`Database ${process.env.DB_NAME} ready.`);
        connection.changeUser({ database: process.env.DB_NAME }, (err) => {
            if (err) throw err;
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS todos (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    completed BOOLEAN DEFAULT FALSE
                )`;
            connection.query(createTableQuery, (err) => {
                if (err) throw err;
                console.log('Table todos ready.');
            });
        });
    });
});

module.exports = connection;
