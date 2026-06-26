//objects
// let data = {
//     Name : "khushboo",
//     Age : 19,
//     Course : "BCA",
//     Sem : 5,
//     Skills : "JavaScript"
//     // greet : function(){
//     //     console.log(`hello, this side ${this.Name}, and my age is ${this.Age}`)
//     // }
// }

// console.log(data)
// //accessing values
// console.log(data.Name) //accessing particular value way 1
// console.log(data["Age"]) //accessing particular value way 2

// //update value
// data.Skills = "java , nodejs, react";
// console.log(data)

// //adding new key
// data.city = "Indore"
// console.log(data);

// //calling function from object
// // console.log(data.greet())

// //adding function in object
// data.greet = function(){
//     console.log("hello")
// }
// console.log(data.greet());

let details = {
    Name:"khushboo"
}

console.log(details)

//adding more details

details.Age = 19
details.City = "indore"
details.Course = "BCA"
console.log(details)

//adding function
details.greet = function(){
    console.log(`Hello, this side ${this.Name}, I live in ${this.City}, currently Doing ${this.Course}`)
}

console.log(details.greet());