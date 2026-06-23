//synchronous - will run each and every line of code line by line
// console.log("good morning") //runs first
// function greet(){
//     console.log("hello")//runs second
// }
// greet();
// console.log("welcome back")//runs third
// function greet1(){
//     console.log("good bye")//runs fourth
// }
// greet1();

//asynchronous
// console.log("good morning") //runs first
// function greet(){
//     console.log("hello")//runs second
// }
// greet();
// setTimeout(() => {
//     console.log("nisha bhtt bolti h") //runs fifth
// }, 3000);

let count = 8;
let time = setInterval(() => {
    console.log(`${count} seconds left`)
    console.log(count);
    count--;
    if(count < 1){
        clearInterval(time);
        setTimeout(() => {
            console.log("time's up")
        }, 9000)
    }
}, 1000)


// console.log("welcome back")//runs third
// function greet1(){
//     console.log("good bye")//runs fourth
// }
// greet1();