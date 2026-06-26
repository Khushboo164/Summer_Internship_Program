//inheritance

//creating parent class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

//creating child class
class Student extends Person{
    constructor(name,course){
        super(name);
        this.course = course;
    }
    study(){
        console.log(`${this.name} Studies ${this.course}`);
    }
}

//creating object of child class
const Student1 = new Student(
    "nisha" , "MERN"
);
console.log(Student1);

//calling methods
Student1.greet();
Student1.study();
