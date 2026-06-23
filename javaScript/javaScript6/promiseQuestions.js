// //login system
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

// user("abc@gmail.com","abc123")

// .then((res) => {
//     console.log(res)
//     // console.log(res,name)
// })
// .catch((rej) => {
//     console.log(rej)
// });

//question 2 - food delivery

// let order = new Promise((res,rej) => {
//     console.log("Your order is being prepared")
//     setTimeout(() => {
//         const available = true;
//         if(available){
//             res("Pizza delivered")
//         }else{
//             rej("Order cancelled")
//         }
//     },2000)
// })

// order 
// .then((res) => {
//     console.log(res);
// })
// .catch((rej) => {
//     console.log(rej)
// })

//question 3 - payment process
// function processPayment(amount){
//     return new Promise((res,rej) => {
//         if(amount > 0){
//             res("Payment succeeds✔️")
//         }else{
//             rej("Payment failed❌")
//         }
//     })
// }
// processPayment(90)
// .then((res) => {
//     console.log(res)
// })
// .catch((rej) => {
//     console.log(rej)
// });

//question 4 - payment error handling
function payment(balance){
    return new Promise((res,rej) => {
        if(balance >= 500){
            res("payment successful✔️")
        }
        else{
            rej("insufficient balance❌")
        }
    })
};

payment(400)
.then((res) => {
    console.log(res);
})
.catch((rej) => {
    console.log(rej)
});