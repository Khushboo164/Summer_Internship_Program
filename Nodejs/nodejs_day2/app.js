//fs module 

//requiring fs module from node module
//synchronous way
const fs = require("fs");
// // const file = __dirname
// const data = fs.readFileSync("file.txt" , "utf-8")
// console.log(data);

// const { error } = require("console");
// const fs = require("fs");

// Asynchronous way

// console.log("starting")
// fs.readFile('file.txt','utf-8',(error,data) =>{
//     if(error){
//         console.log(error);
//         return;
//     }else{
//         console.log(data);
//     }
// })
// console.log("mid");
// console.log("ending");

// write in file - synchronous way 

// let data1 = {
//     batch: 2024,
//     course: "BCA",
//     date: Date.now()
// }

// fs.writeFileSync('file.txt',"magic");

//write in file - Asynchronous way

// fs.writeFile('file1.txt',JSON.stringify(data1),(err) =>{
//     if(err){
//         console.log(err)
//         return;
//     }else{
//         console.log("file created");
//     }
// });


//append in file - synchronous way
// fs.appendFileSync('file.txt',"\nNEw Line Added");


//fs.unlink - unlink file - synchronous way
// fs.unlinkSync("file.txt");

//create directory - synchronous way
// fs.mkdirSync("student");

//read directory - synchronous way
const files = fs.readdirSync("../");
console.log(files)