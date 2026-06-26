//class and object
//creating class
class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}
//creating multiple objects from Student class
const Student1 = new Student("Khushboo" , 19)
console.log(Student1);
const Student2 = new Student("Nisha" , 18)
console.log(Student2);
const Student3 = new Student("Riya" , 19)
console.log(Student3);


//example 2 with function
class Details{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

const Detail1 = new Details("Siya")
console.log(Detail1)
Detail1.greet();