const express = require('express');
const path = require('path');

const router = require('./routers');
const db = require('./config/db');

// connect to database
db.connect();

const app = express();

const PORT = 5000;

// config static file
app.use('/static', express.static(path.join(__dirname, 'public')));

// use body parser
app.use(express.urlencoded({ 
    extended: false 
}));
app.use(express.json());

// config template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'resources', 'views'));


router(app);




app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});