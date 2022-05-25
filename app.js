const express = require('express');
const port = 5000
const bodyParser = require('body-parser');
const db = require('./database/db')
const path = require('path');
const app = express();
// const session = require('express-session')
const mysql = require('mysql')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))



app.get('/', (req, res)=>{
    res.send('server works')
})

app.listen(port, ()=>{console.log(`Server running on ${port}`)})