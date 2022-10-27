const express = require("express");
const app = express();
const bodyParser = require("body-parser");




/*  ---------------------------------------------  */
/*                     MongoDB                     */
/*  ---------------------------------------------  */
const mongoose = require('mongoose');
const DATABASE_URL = "mongodb://localhost:27017/mytestdb"

mongoose.connect(DATABASE_URL)
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.on('open', () => {
    console.log('Connected to MongoDB')
    console.log('DATABASE_URL ' + DATABASE_URL)
})


app.get('/', (req, res) => {
    res.send("Hello World");
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const UserModel = require("./models/user")
app.post('/add-user', (req, res) => {

    console.log(req.body);
    new UserModel({
        "name": req.body.name,
        "pass": req.body.pass,
        "email": req.body.email,
        "contact": req.body.contact,
    })
        .save()
        .then(data => {
            console.log(data);
            return res.send(data)
        })
        .catch(err => {
            console.log(err);
            return res.send(err)
        })
})


app.get('/users/:Id?', (req, res) => {
    if (req.params.Id == undefined) {
    }

    res.json({ msg: "All User Data Accessced", name: "ali", age: 32 })
    // res.send(req.params.Id +" Data Assesced");

})

app.get('/flight/:from-:To', (req, res) => {
    res.send("Flight to" + req.params.from + "  " + req.params.To);

})

app.listen(3000, () => {
    console.log("Server is run in 3000");
})