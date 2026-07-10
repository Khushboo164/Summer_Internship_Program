const express = require("express");
const app = express();
const path = require("path")
const port = 3001;

app.use(express.static(path.join(__dirname ,'public')))

app.use(express.urlencoded({extended:true}));

app.get("/submit",(req,res) => {
    // res.send(`hello you're registered.`)
    res.send(`Registration Successful <br>name: ${req.query.username}<br>From: ${req.query.city}`)
})

app.post("/submit",(req,res) => {
    // res.send(`hello you're registered.`)
    res.send(`Registration Successful <br>name: ${req.body.username}<br>From: ${req.body.city}`)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})