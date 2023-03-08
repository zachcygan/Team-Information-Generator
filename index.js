const fs = require('fs');
const open = require('open');
const getManager = require('./src/getManager')
const getIntern = require('./src/getIntern')
const getEngineer = require('./src/getEngineer')
const addNext = require('./src/addNext');

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

async function init() {
  let html = await getManager(questions);
  let engineerHtml = '';
  let internHtml = '';

  let adding = true;

  while (adding) {
    let add = await addNext();

    if (add === 'Add Engineer') {
      engineerHtml += await getEngineer(engineerQuestions);
    } else if (add === 'Quit') {
      adding = false;
      
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
      open('./dist/index.html');
      break;
    } else {
      internHtml += await getIntern(internQuestions);
    }
  }

    fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

init();
