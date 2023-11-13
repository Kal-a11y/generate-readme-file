const inquirer = require('inquirer') //Inquirer module
const fs = require('fs') //File system module

inquirer
    .prompt([
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
        },
        
        
    ])
//When node is called?
    //When show questions is called?
        //Get user input from answers object
        //add answers to readme template
        //add template content in fs.writeFile()

const getLicenseBadge = license => {
    let badge;
    switch (license){
        case 'MIT License':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Apache License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GNU General Public License (GPL)':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
    }
    return badge
}