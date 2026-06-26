//using Promise.all()

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

async function food() {

    try{
        await loginUser();
        await Promise.all([
            getProfile(),
            getOrder(),
            payment()
        ])
        // console.log(result1)
    }
    catch(err2){
        console.log(err2)
    }
}
food()

