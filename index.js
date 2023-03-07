const fs = require('fs');
const open = require('open');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your managers name:',
        validate: async val => /^[a-zA-Z]+$/gi.test(val),
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter your managers employee ID:',
        validate: async val => /^[0-9]+$/gi.test(val),
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your managers email address:',
        validate: async val => /[a-z0-9!@#$%^&*()-_]/gi.test(val)
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your managers office number:',
        validate: async val => /^[0-9]+$/gi.test(val)
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your engineers name:',
        validate: async val => /^[a-z]+$/gi.test(val)
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter your engineers employee ID:',
        validate: async val => /^[0-9]+$/gi.test(val)
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your engineers email address:',
        validate: async val => /[a-z0-9!@#$%^&*()-_]/gi.test(val)
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your engineers github username:',
        validate: async val => /[a-z0-9!@#$%^&*()-_]/gi.test(val),
    },
]

const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your intern\'s name:',
      validate: async val => /^[a-z]+$/gi.test(val),
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Please enter your intern\'s employee ID:',
      validate: async val => /^[0-9]+$/gi.test(val),
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your intern\'s email address:',
      validate: async val => /[a-z0-9!@#$%^&*()-_]/gi.test(val),
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter your intern\'s school:',
      validate: async val => /^[a-z0-9]+$/gi.test(val)
    },
];

async function writeHtml(data) {
    let html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
      crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1>My Team Members</h1>
      <div class="card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${data.name} (Manager)</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.employeeId}</li>
              <li class="list-group-item">Email: <a href="mailto: ${data.email}">${data.email}</a></li>
              <li class="list-group-item">Office Number: ${data.officeNumber}</li>
            </ul>
          </div>
        </div>
    `

    return html;
}

async function addEngineer() {
    return inquirer
        .prompt(engineerQuestions)
        .then(val => {

            let engineerHTML = `
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${val.name} (Engineer)</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${val.employeeId}</li>
                <li class="list-group-item">Email: <a href="mailto: ${val.email}">${val.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${val.github}" target="_blank">@${val.github}</a></li>
              </ul>
            </div>
          </div>
          `

          return engineerHTML;
        })
}

async function addIntern() {
    return inquirer
        .prompt(internQuestions)
        .then(val => {

            let internHTML = `
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${val.name} (Intern)</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${val.employeeId}</li>
                <li class="list-group-item">Email: <a href="mailto: ${val.email}">${val.email}</a></li>
                <li class="list-group-item">School: ${val.school}</li>
              </ul>
            </div>
          </div>
          `

          return internHTML;
        })
}

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
            // console.log(val.choice);
            
            return val.choice;
        })
}


function getManager() {
    return inquirer.prompt(questions)
        .then((data) => {
            let html = writeHtml(data);


            return html;
            
        })
    
    
}


async function init() {
    let html = await getManager();
    let engineerHtml;
    let internHtml;
    
    let adding = true;

    while(adding) {
        let add = await addNext();

        if (add === 'Add Engineer') {
            engineerHtml =  await addEngineer();
        } else if (add === 'Quit') {
            adding = false;
            open ('./dist/index.html');
            break;
        } else {
            internHtml = await addIntern();
        }
    }

    html += engineerHtml;
    html += internHtml;
    
    html += `
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGz>
    `

    fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

init();
