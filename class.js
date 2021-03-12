//create student clas

class Student{
    constructor(rollno,name,age){
        this.rollno=rollno;
        this.name=name;
        this.age=age;
    }
    getAddress(){
        return "hyderabad"
    }
}

let obj1 = new Student(1,"varun",20);
let obj2 = new Student(2,"varun",20);
let obj3 = new Student(3,"varun",20);

console.log(obj1);

obj3.getAddress()







