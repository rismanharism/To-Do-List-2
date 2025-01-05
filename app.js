const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const path = require('path'); // Tambahkan modul path untuk melayani file statis
require('./models/database');

const app = express();

// Atur Express untuk melayani file statis di folder public
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
