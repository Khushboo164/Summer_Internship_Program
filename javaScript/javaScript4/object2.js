//multi object

const main = [
    {
        id: 1,
        product: "laptop",
        price: 30000
    },
    {
        id: 2,
        product: "bottle",
        price: 1000
    },
    {
        id: 3,
        product: "accessories",
        price: 20000
    },
    {
        id: 4,
        product: "sunglasses",
        price: 1500
    }
]
console.log(main);
console.log(main[0].id); //to get id of particular index 

//to get id of all object in array we use foreach loop
main.forEach(j => {
     console.log(j.id,j.product,j.price)
})

//adding all the prices 
let A = 0;
main.forEach(i => {
    A = A + i.price
})
console.log(A)
