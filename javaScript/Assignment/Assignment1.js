// Question 1 - creating simple function

const greet = function(Name){
    console.log(`Hello!, ${Name}`)
}
greet("Khushboo💕");


//Question 2 - total price problem
const totalPrice = function(Price,Quantity){
    return Price*Quantity
} 
console.log(totalPrice(500,3));

//Question 3 - default parameter

const foodDelivery = function(amount , fees = 40){
    return amount + fees;
}
console.log(foodDelivery(160)); //takes fees as 40 by default
console.log(foodDelivery(160 , 30));

//Question 4 - check eligibility

const eligible = function(age){
    if(age >= 18){
        return "you are eligible to vote"
    }else{
        return "you are not eligible to vote"
    }
}
console.log(eligible(19))
console.log(eligible(15))

//Question 5 - discount calculator using function expression
const discount = function(markedPrice,sellingPrice){
    return markedPrice - sellingPrice
}
console.log(discount(500,450))

//Question 6 - convert rupees to dollars using arrow function

const rupeesToDollar = (rupees,exchangeRate) =>  rupees/exchangeRate
console.log(rupeesToDollar(5000,94.6))