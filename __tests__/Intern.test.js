const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Should return the interns name', () => {
        const intern = new Intern('Zach', 1, 'zachcygan@gmail.com', 'CSUF')

        expect(intern.getName()).toEqual('Zach');
    })

    it('Should return the interns id', () => {
        const intern = new Intern('Zach', 1, 'zachcygan@gmail.com', 'CSUF')

        expect(intern.getId()).toEqual(1);
    })

    it('Should return the interns email', () => {
        const intern = new Intern('Zach', 1, 'zachcygan@gmail.com', 'CSUF')

        expect(intern.getEmail()).toEqual('zachcygan@gmail.com');
    })

    it('Should return the interns school', () => {
        const intern = new Intern('Zach', 1, 'zachcygan@gmail.com', 'CSUF')

        expect(intern.getSchool()).toEqual('CSUF');
    })

    it('Should return the interns role', () => {
        const intern = new Intern('Zach', 1, 'zachcygan@gmail.com', 'CSUF')

        expect(intern.getRole()).toEqual('Intern');
    })
})