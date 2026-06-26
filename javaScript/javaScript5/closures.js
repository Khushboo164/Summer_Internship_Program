//closure - a function that remembers value of variable for outer scope even after execution is ended

// example 1
function outer(){
    var a = 1
    return function inner(){
        a++;
        console.log(a)
    }
}

const ans = outer();
ans();
ans();
ans();
ans();
ans();


//example2
function main1(){
    var x = 10
    return function main2(){
        x++;
        return function main3(){
            x++;
            console.log(x)
        }
    }
}
const ans1 = main1();
const ans2 = ans1();
ans2();
ans2();
ans2();