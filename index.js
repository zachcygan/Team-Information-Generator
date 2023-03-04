var fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const questions = [
    {
        type: 'input',
        name: 'name',
        message: ''
    }
];

function writeToFile(data) {
    
}