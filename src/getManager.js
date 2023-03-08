const inquirer = require('inquirer');

function getManager(questions) {
    return inquirer.prompt(questions)
        .then((data) => {
            let html = writeHtml(data);


            return html;
            
        })
    
    
}

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

module.exports = getManager;
