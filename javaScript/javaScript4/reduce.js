//reduce() function
//syntax arr.reduce(callbackFunction,initialValue) initialValue- starting point, current- current element, accumulator-stores the result
//does not creates any new arrange just returns a single value

const num = [10,20,30];
const sum = num.reduce((acc,curr) => {  //the first value in parameter is accumulator and second is current value
    return acc + curr; 
    } , 0);  // 0 is initial value
console.log(sum);

// //example2
const cart = [
    {
        price : 1000
    },
    {
        price : 1500
    },
    {
        price : 2000
    }
]

const total = cart.reduce((sum,item) => {
    return sum + item.price;
}, 0);
console.log(total);

//applying all three in same array map(),filter() and reduce

let arr = [-2, 3, 5, 8,-9]
let arr2 = arr.map(i =>  i + 2) //in arrow function we only add return statement when we add curly brackets
console.log(arr2)

let arr3 = arr2.filter(num => num >= 0);
console.log(arr3);

let finalArr = arr3.reduce((i, j) => i + j, 0);
console.log(finalArr);

//all three in single line
let Arr = [-2, 3, 5, 8,-9]
const ans = Arr.map(i => i + 2).filter(i => i>=0).reduce((sum,item) => sum+item); //by default initial value is 0
console.log(ans);