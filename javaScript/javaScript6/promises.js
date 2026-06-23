//promises - handles asynchronous functionality has 3 states - pending , fulfilled , rejected
//task that need some time to execute are usually handled by promises
//syntax - const promise = new promise((resolve , reject) => {
    //asynchronous task
    //}); 

//to handle promises we use - 
//.then() - handles resolve case
//.catch() - handles reject case

//example 1
// const orderFood = new Promise((resolve , reject) => {

//     const delivered = false;
//     if(delivered){
//         resolve("food delivered")
//     }else{
//         reject("order cancelled")
//     }
// } );

// orderFood.then((resolve) => {
//     console.log(resolve);
// })
// .catch((reject) => {
//     console.log(reject);
// })

//example 2
// 1st way
let connection = new Promise((res,rej) => {
    console.log("connecting to db");
    console.log("wait....");
    setTimeout(() => {
        // console.log("connected successfully")
        // res();
        res("connected")
    },1000)
});

connection
.then((res) => {
    console.log(res,"promise fulfilled✔️");
})
.catch(() => {
    console.log("promise rejected❌")
});

//2nd way
// function connection(){
// return new Promise((res,rej) => {
//     console.log("connecting to db");
//     console.log("wait....");
//     setTimeout(() => {
//         // console.log("connected successfully")
//         // res();
//         res("connected")
//     },1000)
// });
// }
// connection()
// .then((res) => {
//     console.log(res,"promise fulfilled✔️");
// })
// .catch(() => {
//     console.log("promise rejected❌")
// });

