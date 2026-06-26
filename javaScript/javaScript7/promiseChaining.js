// // //promise chaining

// // function user(email, password){
// //     return new Promise((res, rej) => {
// //         console.log("kindly wait we are verifying your credentials..")

// //         setTimeout(() => {
// //             if(email == "abc@gmail.com" && password == "abc123"){
// //                 res({
// //                     id: 1,
// //                     name: "abc"
// //                 })
// //             }
// //             else{
// //                 rej("invalid credentials")
// //             }
// //         },3000)
// //     })
// // }

// // user("abc@gmail.com","abc123")
// // .then((res) => {
// //     return res;
// //     // console.log(res,name)
// // })
// // .then((data) => {
// //     console.log(data);
// //     return data
// // })
// // .then((userData) => {
// //     console.log(userData.name);
// //     console.log(userData.id);
// // })
// // .catch((rej) => {
// //     console.log(rej)
// // });

// //this example won,t ryn everything in sequence it will run all together like first all normal console.log and then all setTimeOut one by one.
// function loginUser(Profile){
//     console.log("logging in....")

//     setTimeout(() => {
//         console.log("logged in✅..")
//     },1000);
//     Profile();
// }

// function getProfile(order){
//     console.log("fetching your profile... ")

//     setTimeout(() => {
//         console.log("Profile fetched✅..")
//     },1000);
//     order();
// }

// function getOrder(pay){
//     console.log("preparing your order...");
//     setTimeout(() => {
//         console.log("order prepared🍕🍔")
//     },1000)
//     pay();
// }

// function payment(){
//     console.log("Processing payment...")

//     setTimeout(() => {
//         console.log("payment done💳")
//     },1000)
// }


// loginUser(() => {
//     getProfile(() => {
//         getOrder(() => {
//             payment();
//         })
//     })
// })

 // converting function in promise- to solve the issue
function loginUser(){
    return new Promise((res,rej) => {
        console.log("Logging in....")

    setTimeout(() => {
        console.log("Logged in✅..")
        res();
    },1000);
    }) 
}

function getProfile(){
    return new Promise((res,rej) =>{
        console.log("Fetching your profile... ")

    setTimeout(() => {
        console.log("Profile fetched✅..")
        res();
    },2000);
    })
}

function getOrder(){
    return new Promise((res,rej) => {
        console.log("Preparing your order...");
    setTimeout(() => {
        console.log("Order prepared🍕🍔")
        res();
    },3000)
    })
}

function payment(){
    return new Promise ((res,rej) => {
        console.log("Processing payment...")

    setTimeout(() => {
        console.log("Payment done💳")
        res();
    },4000)
    })
}


loginUser()
.then(getProfile)
.then(getOrder)
.then(payment)

.catch((err) => {
    console.log("Error")
});
