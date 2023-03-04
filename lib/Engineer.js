const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super('Lilli', 4, 'test@gmail.com')
        this.github = github;
    }

    getRole() {
        return this.constructor.name;
    }

    get Github() {
        return this.github;
    }
}

module.exports = Engineer;