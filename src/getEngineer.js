const inquirer = require('inquirer');

async function addEngineer(questions) {
    return inquirer
        .prompt(questions)
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

module.exports = addEngineer;