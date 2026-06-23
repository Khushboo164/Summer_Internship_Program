//map() function
//acts a loop but creates and stores result in new array - usually used to make changes in current array and saves result in new array
//syntax - arr.map(callbackFunction);
const numbers = [1,2,3,4];
const double = numbers.map(i => {
    return (i * 2) + 2;
});
console.log(double);