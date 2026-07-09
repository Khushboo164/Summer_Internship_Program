const express = require("express");
const app = express();
const path = require("path")

// const khushboo = require("express");
// const app = khushboo();

const PORT = 3000;
//used to load content of particular folder express.static and path.join to give path of particular file
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req,res) => {res.send("welcome to express , lets start, lets go, hello, welcome back")})

app.get("/mern",(req,res) => {
    // res.send("<h1 style='color:pink;'>Hello all </h1>")
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/public", (req,res) => {
    

})
app.listen(PORT, () => {
    console.log(`server running on PORT no. 30000......`)
});
