const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


const team = [];

// Prompt for Manager details
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email:",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Provide the manager's office number:",
        },
    ]);
};

// Prompt for Engineer details
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Provide the engineer's GitHub username:",
        },
    ]);
};

// Prompt for Intern details
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email:",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school:",
        },
    ]);
};
