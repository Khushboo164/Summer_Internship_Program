//map()
//problem 1 - convert prices to discount prices

const prices = [1000,2000,3000]
const discountPrice = prices.map(i => i * 0.9)
console.log(discountPrice);

//problem 2 - extract user names

const users = [
    {id: 1, name: "khushboo"},
    {id: 2, name: "nisha"},
    {id: 3, name: "jayant"}
]

const users1 = users.map(i => i.name)
console.log(users1);

//problem 3 - create order summaries
const products = [
    {name: "laptop", price: 50000},
    {name: "phone", price: 30000}
]
const summary = products.map(i => `${i.name} - ${i.price}`)
console.log(summary)

//filter()
//problem 1 - show expensive products

const Prod = [
    {name: "laptop", price: 50000},
    {name: "mouse", price: 500},
    {name: "phone", price: 30000}
]
const finalProd = products.filter(i => i.price > 20000);
console.log(finalProd);

//problem 2 - active users
const user = [
    {name: "sameer", active: true},
    {name: "rahul", active: false},
    {name: "nisha", active: true},
    {name: "riya", active: true}
]

const activeUsers = user.filter(i => i.active == true);
console.log(activeUsers);

//problem 3 - search feature
const p = ["iphone" , "headphone" , "laptop" , "PhoneCase"]
const P1 = p.filter(name => name.toLocaleLowerCase(p).includes("phone"))
console.log(P1);

//reduce()
//problem 1 - calculate cart total
const Price = [1000,2000,3000];
const totalPrice = Price.reduce((i , j) => i + j)
console.log(totalPrice);

//problem 2 - count total quantity
const cart = [
    {name: "laptop", quantity: 2},
    {name: "mouse", quantity: 3}
]

const quant = cart.reduce((i , j) => {
    return i + j.quantity
}, 0)
console.log(quant);

//problem including all
// find available products , calculate discount price , find total amount , increase the quant of laptop and calculate price, make phone available and find total price

const data = [
    {
   name: "Laptop",
   price: 50000,
   available: true,
   quantity: 2
 },
 {
   name: "Phone",
   price: 30000,
   available: false,
   quantity: 7
 },
 {
   name: "Mouse",
   price: 1000,
   available: true,
   quantity: 12
 }
]

//finding available cart
const data1 = data.filter(i => i.available == true);
console.log(data1);

//calculating discounted price
const data2 = data.map(i => i.price * 0.1);
console.log(data2);

//finding total quantity
const data3 = data.reduce((i , j) => {
    return i + j.quantity;
},0);
console.log(data3)


//finding total amount
const data4 = data.reduce((i , j) =>{
    return i + j.price
}, 0);
console.log(data4)

//increase quantity of laptop and calculate price
const data5 = data.filter(i => i.name == "Laptop").map(i => i.quantity + 2);
console.log(data5)
// console.log(data)
data.quantity = 4;
console.log(data)
const TotalPrice = data.map(i => i.price*i.quantity)
console.log(TotalPrice)

//make phone available and find total price
const data6 = data.filter(i => i.available == false).map(i => i.available = true);
console.log(data6)