const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.constructor.name;
    }
}

const test = new Manager(15);

console.log(test.getId())

module.exports = Manager;

