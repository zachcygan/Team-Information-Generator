const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('Should return the employees name', () => {
        const employee = new Employee('Zach', 1, 'zachcygan@gmail.com')

        expect(employee.getName()).toBe('Zach');
    })

    it('Should return the employees id', () => {
        const employee = new Employee('Zach', 1, 'zachcygan@gmail.com')

        expect(employee.getId()).toBe(1);
    })

    it('Should return the employees email', () => {
        const employee = new Employee('Zach', 1, 'zachcygan@gmail.com')

        expect(employee.getEmail()).toBe('zachcygan@gmail.com');
    })

    it('Should return the employees role', () => {
        const employee = new Employee('Zach', 1, 'zachcygan@gmail.com')

        expect(employee.getRole()).toBe('Employee');
    })
})

