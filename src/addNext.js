const inquirer = require('inquirer');

async function addNext() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Would you like to quit, or add an enginner/intern?',
                choices: ['Quit', 'Add Engineer', 'Add Intern']
            }
        ])
        .then(val => {
            if (val.choice === 'quit') {
                return;
            }
            
            return val.choice;
        })
}

module.exports = addNext;