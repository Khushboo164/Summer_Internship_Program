//hoisting - calling function before declaring the function
//it is only possible in java script and not in any other language
//in function
greet();
function greet(){
    console.log("hello!")
}

//in variable - declaration is hoisted but value will not be assigned
console.log(name);
var name = "Khushboo";


