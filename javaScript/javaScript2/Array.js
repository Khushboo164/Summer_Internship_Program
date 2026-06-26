//arrays

let arr = [2,4,6,8,10,12]
arr.forEach(i => {
    console.log(i)
});

arr.push(30); //insert element from back
console.log( "after push operation: " + arr);

arr.pop()
console.log("after pop operation: " + arr);//removes last element

arr.unshift(30);
console.log("after unshift operation: " + arr); //inserts value form starting

arr.shift();
console.log("after shift operation: " + arr);//removes first element 

console.log(arr.indexOf(10)); //returns index of value

console.log(arr[3]); //returns value on 3rd index

//merging 2 arrays
let arr2 = [1,3,5,7,9,11]
// arr.push(arr2);
// console.log(arr);

let arr3 = [...arr, ...arr2];//merges both without bracket, '...'-spread operator
console.log(arr3);