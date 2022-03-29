const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const mongoose = require("mongoose");
//middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/test', (req, res)=>{
    res.render('test')
})

app.get('/header', (req, res)=>{
  res.render('header')
})


app.get('/create',(req, res)=>{
    res.render('create', {title: req.body.title, body: req.body.noteBody})
})
app.post('/createNote',(req, res)=>{
    console.log(req.body.title)
    console.log(req.body.noteBody)
    res.render('index', {title: req.body.title, body: req.body.noteBody})

})

app.listen(port, () => {
  console.log("Hello world", port);
});
