class Person {
    constructor(firstName, lastName, age, email) {
        hunger = 100;

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    static staticMethod() {
        return `My name is`
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' Iglika.'
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

console.log(person.hunger);

