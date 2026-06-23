//callback function

function greet(){
    console.log("hello")
}
function user(greet){
    greet();
}
user(greet);

//callback with one parameter
function greet1(){
    console.log("hello!");
}
function user1(greet1,name){
    greet1();
    return name;
}
// user1(greet,"khushboo");
console.log(user1(greet,"khushboo"));

//example two
function payment1(){
    console.log("payment successful✅")
}
function payment2(amount , payment1){
    console.log(`${amount} deducted from your account`);
    payment1();
}
payment2(1200,payment1);

//example three
