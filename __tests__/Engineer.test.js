const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('Should return the engineers name', () => {
        const engineer = new Engineer('Zach', 1, 'zachcygan@gmail.com', 'zachcygan')

        expect(engineer.getName()).toEqual('Zach');
    })

    it('Should return the engineers id', () => {
        const engineer = new Engineer('Zach', 1, 'zachcygan@gmail.com', 'zachcygan')

        expect(engineer.getId()).toEqual(1);
    })

    it('Should return the engineers id', () => {
        const engineer = new Engineer('Zach', 1, 'zachcygan@gmail.com', 'zachcygan')

        expect(engineer.getEmail()).toEqual('zachcygan@gmail.com');
    })

    it('Should return the engineers role', () => {
        const engineer = new Engineer('Zach', 1, 'zachcygan@gmail.com', 'zachcygan')

        expect(engineer.getRole()).toEqual('Engineer');
    })

    it('Should return the engineers github', () => {
        const engineer = new Engineer('Zach', 1, 'zachcygan@gmail.com', 'zachcygan')
        console.log(engineer)

        expect(engineer.getGithub()).toEqual('zachcygan');
    })
})