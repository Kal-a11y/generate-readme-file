//import inquirer module
//import filesystem module

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