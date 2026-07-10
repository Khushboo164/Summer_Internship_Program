const express = require("express");
const app = express();
const PORT = 3000;

app.get("/" , (req,res) => {
    res.send("<h1> hello all </h1>")
})

//getting req "Name" using - params "/about:name"
app.get("/student:name", (req,res) => {
    res.send(`<h1>hello this side ${req.params.name}, student of sage university</h1>`)
})

//getting req "city" using - QueryParameters "/city?name=Indore"

app.get("/city" , (req,res) => {
    res.send(`<h1>welcome to ${req.query.name}</h1>`)
})


app.get("/city1" , (req,res) => {
    res.send(`<h1>welcome to ${req.query.name} , ${req.query.address}</h1>`)
})

app.get("/about" , (req,res) => {
    res.send(`<h2> Hello I'm ${req.query.name}<br>Currently studying at ${req.query.college}<br>Pursuing ${req.query.course}</h2>`)
})
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})