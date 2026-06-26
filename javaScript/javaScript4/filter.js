//filter() function
//syntax arr.filter(callbackFunction)
//creates a new array and only include that cases that passes the given condition in function

const ages = [10,20,30];
const adult = ages.filter(age => age >= 18); //using arrow function here
console.log(adult);