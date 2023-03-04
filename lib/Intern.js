const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super('Adam', 3, 'test2@gmail.com')
        this.school = school;
    }

    getRole() {
        return this.constructor.name;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;