const inquirer = require('inquirer');

async function addIntern(questions) {
    return inquirer
        .prompt(questions)
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

module.exports = addIntern;