const inquirer = require('inquirer') //Inquirer module
const fs = require('fs') //File system module

//When node is called?
    //...Show questions
        //Use inquirer.prompt([])
            //the answers are stored in an object
        //'What is the title of your project?'
        //'What is a description of your project ?'
        //'What are you instructions for installation?'
        //'What are the instructions for usage?'
        //'What are your guidelines for contributing ?'
        //'What are the instructions to run tests?'
        //'Which license are you using?'
            //'MIT License','Apache License 2.0','GNU General Public License (GPL)', 'None'
        //'What is your github username?'
        //'What is your email address?'
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