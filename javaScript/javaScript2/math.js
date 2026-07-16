const sum = 0.1 + 0.2;
console.log(sum.toFixed(4));

let a = 45.89562756
console.log(a.toPrecision(4));

let b = 2.9;
console.log(Math.floor(b)); //returns least number
console.log(Math.ceil(b)); // returns nearest largest number

console.log(Math.random());//generates any random number
console.log(Math.random()* 10);
console.log(Math.floor(Math.random()* 10));
console.log(Math.ceil(Math.random()* 10));

console.log(Math.min(2, -1, 9 , 0 , 7));
console.log(Math.max(2, -1, 9 , 0 , 7));

let x = true;
console.log(x);
const y = Number(x);
console.log(y);//true = 1

//if else-
//example 1
 let hello = true;
//  console.log(typeof hello)
if(hello){
    console.log("Welcome!🥰")
}
else{
    console.log("Bye👋")
}

//example 2
let age = 19;
if(age >= 18){
    console.log("you are eligible✔️")
}
else{
    console.log("you are not eligible❌")
}

//multiple of 2 using for loop
for(let i = 1; i <= 10; i++){
    console.log(2*i)
}

