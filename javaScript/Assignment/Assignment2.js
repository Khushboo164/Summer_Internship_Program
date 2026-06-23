// //Question 1 - create and access object properties

// let student = {
//     Name : "Khushboo",
//     Age : 19,
//     Class : "BCA",
//     City : "Indore"
// }

// console.log(student.Name);
// console.log(student.Age);

// //Question 2 - update object properties

// student.City = "delhi";
// student.Age = 22;
// console.log(student.City);
// console.log(student.Age);

// //Question 3 - Add and delete properties
// let appStore = {
//      orderNo : 40,
//      orderId: 201,
//      temporaryToken : 32
// }
// //adding
// appStore.phone = 6789023452
// console.log(appStore)
// //removing
// delete appStore.temporaryToken;

// console.log(appStore)

// //Question 4 - Dynamic property Access

// let details = {
//     Name : "nisha",
//     Email : "nisha@gmail.com",
//     ID : 45,
//     getValue : function(){
//          console.log(`User, ${this.Email}`)
//    }
// }
// console.log(details.getValue());

//Question 5 - loop through an object

let ABC = [
    {
    Product : "phone",
    productId : 302,
    Price : 56000,
    DateOfPurchase : 23 
}
]
ABC.forEach(i =>{
    console.log(i)
})