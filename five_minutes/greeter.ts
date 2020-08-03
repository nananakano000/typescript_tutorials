class Student{
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ){
        this.fullName = firstName+" "+middleInitial+" "+lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName +" "+ person.lastName;
}

let user = new Student("Jane", "M.", "User");
// let user = [0, 1, 2];

document.body.textContent = greeter(user);

// console.log(user);