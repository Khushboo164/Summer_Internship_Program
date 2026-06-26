console.log("Hello👋");

// using let 
let A = "welcome back"
console.log(A)
// reassigning A 
A = 20
console.log(A)
// reassigning A  with extra string
A = 30
// console.log(A + " oct") ways of string printing extra string along with variable
console.log(`${A} oct`)

// let and var works same 

// using const 
const B = "have a nice day"
console.log(B)

//reassigning const which is not possible and gives error
// B = 30
// console.log(B)

//difference between block scope and global scope
let a = 10
console.log(a)
var b = 30
console.log(b)
const c = 65
console.log(c)
{
    let a = 20       
    console.log(a)
    // if let is not used then it will print 20 outside the block scope also 

    var b = 40
    console.log(b)
    // var will print 40 inside and outside block because it is global scope variable type 

    const c = 90
    console.log(c) // does not gives error because it is block scope and can be re declared inside diff block but cannot be re assigned because it is const.
    
}
console.log(a)
console.log(b)
console.log(c)





