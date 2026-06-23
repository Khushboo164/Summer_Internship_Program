//function expression

const sunstone = function(){
    console.log("Education with 100% placement")
}
sunstone();

//parameters and argument

const sunstone2 = function(batch){
    console.log(`80% placement in batch ${batch}`)
}
sunstone2(2026);

//2 parameters and argument
const sunstone3 = function(course,batch){
    console.log(`80% placement of ${course} in batch ${batch}`)
}
sunstone3("BCA",2026);

//return function

const sunstone4 = function(BCA,MCA,BBA,MBA){
    return BCA + MCA + BBA + MBA
}
console.log(sunstone4(120,130,125,140))