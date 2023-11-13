// TODO: Include packages needed for this application
const inquirer = require('inquirer') //Inquirer module
const fs = require('fs') //File system module
const generateMarkdown = require('./Assets/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of your project ?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are you instructions for installation?',
        name: 'instalation',
    },
    {
        type: 'input',
        message: 'What are the instructions for usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your guidelines for contributing ?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the instructions to run tests?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: [
            'MIT License',
            new inquirer.Separator(),
            'Apache License 2.0',
            new inquirer.Separator(),
            'GNU General Public License (GPL)',
            new inquirer.Separator(),
            'None',
            new inquirer.Separator(),
        ],
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data), error => {
        
    }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
