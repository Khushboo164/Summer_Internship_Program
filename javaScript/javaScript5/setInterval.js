//setInterval() - used to repeat task after fixed time of delay
// setInterval(useCallback, delay)
// setInterval(() => {
//     console.log("Hello")
// }, 1000)

//example 1
// let count = 5;
// const timer = setInterval(() => {
//     console.log(count);
//     count--;
//     if(count < 0){
//         clearInterval(timer); //used to stop the interval
//     }
// }, 1000);

//example 2 - timer
// let time = new Date();
// let count = 0;
// let timer = setInterval(() => {
//     let time = new Date();
//     console.log(time.toLocaleTimeString());
//     count++;
//     if(count >= 10){
//         clearInterval(timer)
//     }
// }, 1000)

//table of 2
let count = 1;
const timer = setInterval(() => {
    
    console.log( 2 * count);
    count++;
    if(count >= 11){
        clearInterval(timer)
    }
},1000)