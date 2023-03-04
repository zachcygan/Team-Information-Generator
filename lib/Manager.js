const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super('Zach', 5, 'zachcygan@gmail.com');
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.constructor.name;
    }
}

const test = new Manager(15);

console.log(test.getId())

