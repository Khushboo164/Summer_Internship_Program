const express = require("express");
const app = express();
const path = require("path")
const port = 3002;
app.use(express.static(path.join(__dirname, 'public'))) //middleware to extract folder
app.use(express.json()); //middleware to convert data in json format

let todos = ["read"]; //creating an array named todos

app.get('/addTask', (req, res) => {  //created /addTask api
    let { work } = req.query; //getting value stored in key-work from frontend
    console.log(work);
    if (work != "") {  //applying condition to not store empty value in array-todos
        todos.push(work); //adding value from work-key in todos-array
    }
    res.redirect('/todos')  //redirecting the value from work-key in todos api and in frontend
})

app.get('/todos', (req, res) => { //created api to get all values stored and added in todos-array
    res.send(todos);
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})