const express = require("express");
const app = express();
const path = require("path")
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get("/student:name", (req,res) => {
    res.send(`hello this side ${req.params.name}, student of sage university`)
})
app.listen(port, () => {
    console.log(`server running on PORT no. 3000......`)
});