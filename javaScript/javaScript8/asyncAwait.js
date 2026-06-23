// function greet(){
//     return new Promise((res,rej) => {
//         let delivered = false;
//         if(delivered){
//             res("delivered")
//         }else{
//             rej("not delivered")
//         }
//     })
// }
// async function print() {
//     try{
//     const msg = await greet()
//     console.log(msg)
//     console.log("Hello")
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// print()

//question 1
// function connection() {
//     return new Promise((res, rej) => {
//         console.log("connecting to db");
//         console.log("wait....");
//         setTimeout(() => {
//             // console.log("connected successfully")
//             // res();
//             res("connected")
//         }, 1000)
//     });
// }

// async function result() {
//     // try{
//     const res = await connection()
//     console.log(res)
//     // }

// }
// result();

//question 2
// function processPayment(amount){
//     return new Promise((res,rej) => {
//         if(amount > 0){
//             res("Payment succeeds✔️")
//         }else{
//             rej("Payment failed❌")
//         }
//     })
// }

// async function payment() {
//     try{
//         const msg = await processPayment(100)
//         console.log(msg);
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }
// payment()

//question3

// function user(email, password){
//     return new Promise((res, rej) => {
//         console.log("kindly wait we are verifying your credentials..")

//         setTimeout(() => {
//             if(email == "abc@gmail.com" && password == "abc123"){
//                 res({
//                     id: 1,
//                     name: "abc"
//                 })
//             }
//             else{
//                 rej("invalid credentials")
//             }
//         },3000)
//     })
// }

// async function login() {
//     try{
//     const user1 = await user("ab@gmail.com", "abc123" )
//     console.log(user1);
//     }
//     catch(err1){
//         console.log(err1)
//     }
// }
// login()


//question 4
function loginUser(){
    return new Promise((res,rej) => {
        console.log("logging in....")

    setTimeout(() => {
        console.log("logged in✅..")
        res();
    },1000);
    }) 
}

function getProfile(){
    return new Promise((res,rej) =>{
        console.log("fetching your profile... ")

    setTimeout(() => {
        console.log("Profile fetched✅..")
        res();
    },2000);
    })
}

function getOrder(){
    return new Promise((res,rej) => {
        console.log("preparing your order...");
    setTimeout(() => {
        console.log("order prepared🍕🍔")
        res();
    },3000)
    })
}

function payment(){
    return new Promise ((res,rej) => {
        console.log("Processing payment...")

    setTimeout(() => {
        console.log("payment done💳")
        res();
    },4000)
    })
}

async function food() {
    try{
        await loginUser();
        await getProfile();
        await getOrder();
        await payment();
        // console.log(result1)
    }
    catch(err2){
        console.log(err2)
    }
}
food()