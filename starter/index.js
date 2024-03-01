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

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}


const team = [];

// Prompt for Manager details
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name:",
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
    ])

     // function to output data
     .then((answers) => {
        console.log (answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        addEmployee();
    });
};



// Prompt to add more team members
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Add another team member:',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
        },
    ])
    .then((answers) => {
        if (answers.role === 'Engineer') {
            addEngineer();
        } else if (answers.role === 'Intern') {
            addIntern();
        } else {
            addTeam();
        }
    });
};




// Prompt for Engineer details
const addEngineer = () => {
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
    ])

    .then((answers) => {
        console.log (answers);
       const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
       team.push(engineer);
       addEmployee();
   });
};



// Prompt for Intern details
const addIntern = () => {
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
        }

    ])

    .then((answers) => {
        console.log (answers);
       const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
       team.push(intern);
       addEmployee();
   });
};


// Function to build the team
function addTeam() {
    console.log("Team:", team);
    fs.writeFileSync(outputPath, render(team), "utf-8");
    console.log("You have successfully created a team!");
}

// Call the function
addManager();


