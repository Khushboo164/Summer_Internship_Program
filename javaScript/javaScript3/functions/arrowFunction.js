//arrow function

const sunstone = () =>{
    console.log("Education with 100% placement")
}
sunstone();

//parameters and argument

const sunstone2 = (batch) =>{
    console.log(`80% placement in batch ${batch}`)
}
sunstone2(2025);

//2 parameters and argument
const sunstone3 = (course,batch) =>{
    console.log(`80% placement of ${course} in batch ${batch}`)
}
sunstone3("BCA",2025);

//return function

//with multiple parameters
// const sunstone4 = (BCA,MCA,BBA,MBA) => {
//     return BCA + MCA + BBA + MBA
// }
//or
const sunstone4 = (BCA,MCA,BBA,MBA) =>  BCA + MCA + BBA + MBA
console.log(sunstone4(120,130,125,140))