// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
          {
              type: 'input',
              name: 'userName',
              message: 'What is your github user name?',
          },
           {
               type: 'input',
               name: 'repo',
               message: 'Enter the github repository link here:',
           },
         {
             type: 'input',
             name: 'title',
             message: 'What is the title of this project?',
         },
         {
             type: 'input',
             name: 'description',
             message: 'Provide a description of the project.',
         },
         {
             type: 'input',
             name: 'install',
             message: 'What are the intallation instructions for this project?',
         }, 
           {
             type: 'input',
             name: 'usage',
             message: 'How will this repository be used? How will this program be used?',
           },
         {
            type: 'input',
            name: 'contribute',
            message: 'Who contributed to this project?',
        },
         {
           type: 'input',
           name: 'test',
           message: 'What are the methods for testing?',
         },
            {
              type: 'input',
              name: 'credit',
              message: 'Who is to credit for this project?',
            },
        {
            type: 'list', //change to list 
            name: 'license',
            message: 'Select a license:',
            choices: ["MIT", "Apache", "Mozilla", "GNU GPLv3"]
         },    
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
const init = () => {
                    promptUser().then((answers) => {
                        const readMe = generateReadMe(answers);
                        fs.writeFile('README.md', readMe, (err) => {
                        if (err) {
                            console.error(err)
                        return 
                        }
                        console.log('Successfully wrote to README.md')
                    });
                    
});
};

// Function call to initialize app
init();
