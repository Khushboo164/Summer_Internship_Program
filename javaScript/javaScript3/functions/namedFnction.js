//functions
//syntax
//function functionName(){
//    function data
//}

function sunstone1(){
    console.log("Education with 100% placement")
}
sunstone1();

//parameters and argument
// batch is parameter
function sunstone2(batch){
       console.log(`80% placement in ${batch} `)
}
sunstone2(2025);
//2025 is argument

//2 parameter and argument

function sunstone3(course, batch){
    console.log(`80% students placed of ${course} in batch ${batch}`);
}
sunstone3("BCA",2026);

//return type function

function totalStudent(BCA,BTECH,MBA,MCA){
    return BCA + BTECH + MBA + MCA
}
console.log(totalStudent(120,250,150,160))