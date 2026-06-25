//using Promise.all()

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

