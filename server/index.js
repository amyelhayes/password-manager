const express = require('express');
const app = express(); 
const mysql = require('mysql');
const PORT = 3001;
 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Codeworks1!',
    database: 'passmanager'
});

app.post('/addpassword', (req, res)=>{
    const {password, title} = req.body
    db.query('INSERT INTO passwords (password, title) VALUES (?,?)', [password, title], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('yay!');
        }
    });
});

app.listen(PORT, ()=>{
    console.log("Listening on port " + PORT);
});