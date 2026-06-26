//movie ticket problem

function selectMovie(){
    return new Promise((res,rej) => {
        // console.log("Selecting movie")
        setTimeout(() =>{
            console.log("Movie selected")
            res()
        },1000)
    })
}

function selectSeats(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log("Seats booked")
            res();
        },1000)
    })
}

function makePayment(){
    return new  Promise((res,rej) => {
        setTimeout(() => {
            console.log("Payment successful")
            res();
        },1000)
    })
}

function generateTicket(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log("Ticket generated")
            res({
                name: "avengers",
                seats: 2,
                amount: 600
            });
        },1000)
    })
}


selectMovie()
.then(selectSeats)
.then(makePayment)
.then(generateTicket)
.catch((err) => {
    console.log("process failed")
})

