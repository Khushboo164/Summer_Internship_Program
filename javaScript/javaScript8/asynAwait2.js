// function selectMovie(){
//     return new Promise((res,rej) => {
//         // console.log("Selecting movie")
//         setTimeout(() =>{
//             console.log("movie selected")
//             res()
//         },1000)
//     })
// }

// function selectSeats(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("Seats booked")
//             res();
//         },1000)
//     })
// }

// function makePayment(){
//     return new  Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("Payment successful")
//             res();
//         },1000)
//     })
// }

// function generateTicket(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("Ticket generated")
//             res({
//                 name: "avengers",
//                 seats: 2,
//                 amount: 600
//             });
//         },1000)
//     })
// }

// async function receipt() {
//     try{
//         await selectMovie()
//         await selectSeats()
//         await makePayment()
//         const result = await generateTicket()
//         console.log(result)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// receipt()

function user(number){
    return new Promise((res, rej) => {
        console.log("kindly wait we are verifying your credentials..")

        setTimeout(() => {
            if(number == 2345456){
                console.log("otp sent")
                res(1234)
            }
            else{
                rej("Invalid number")
            }
        },3000)
    })
}

function verify(userOtp, actualOtp){
    return new Promise((res,rej) => {

        
        if(userOtp == actualOtp){
            console.log("otp verified")
            res("welcome")
        }
        else{
            console.log("Invalid otp")
        }
    })

}

async function result() {
    try{
        const res = await user(2345456)
        console.log(res)
        const res2 = await verify(1234,res)
        console.log(res2)
    }
    catch(err){
    console.log(err)
    }
}

result()