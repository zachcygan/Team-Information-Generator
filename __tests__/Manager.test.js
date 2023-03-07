const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should return the Managers name', () => {
        const manager = new Manager('Zach', 1, 'zachcygan@gmail.com', 101)

        expect(manager.getName()).toEqual('Zach');
    })

    it('Should return the Managers id', () => {
        const manager = new Manager('Zach', 1, 'zachcygan@gmail.com', 101)

        expect(manager.getId()).toEqual(1);
    })

    it('Should return the Managers email', () => {
        const manager = new Manager('Zach', 1, 'zachcygan@gmail.com', 101)

        expect(manager.getEmail()).toEqual('zachcygan@gmail.com');
    })

    it('Should return the Managers office number', () => {
        const manager = new Manager('Zach', 1, 'zachcygan@gmail.com', 101)

        expect(manager.getOfficeNumber()).toEqual(101);
    })

    it('Should return the Managers role', () => {
        const manager = new Manager('Zach', 1, 'zachcygan@gmail.com', 101)

        expect(manager.getRole()).toEqual('Manager');
    })
})