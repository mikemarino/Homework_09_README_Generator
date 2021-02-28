// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);


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
               message: 'Copy and paste the repo link here:',
           },
         {
             type: 'input',
             name: 'title',
             message: 'What is the title of this project?',
         },

         {
             type: 'editor',
             name: 'description',
             message: 'Provide a description of the project.',
         },
         {
             type: 'list',
             name: 'install',
             message: 'Select the installation method for best use?',
             choices: ['Basic Browser', 'NPM Instructions']

         }, 
         {
             type: 'checkbox',
             name: 'usage',
             message: 'Select the languages used in this project',
             choices: [
                 'HTML', 'CSS', 'JavaScript', 'jQuery', 'SQL', 'JSON',
             ],

         },
        {
            type: 'list',
            name: 'contribute',
            message: 'Include Guidelines for contributions?',
            choices: ['Yes', 'No']

        },




         {
             type: 'checkbox',
             name: 'reptiles',
             message: 'Which reptiles do you love?',
             choices: [
                 'Alligators', 'Snakes', 'Turtles', 'Lizards',
             ],
         },
             {
      type: 'expand',
      name: 'reptile', 
      message: 'Which is better?',
      choices: [
        {
          key: 'a',
          value: 'alligator',
        },
        {
          key: 'c',
          value: 'crocodile',
        },
      ],
    },
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const generateReadMe = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>


Getting Started
These instructions will get you a copy of the project up and running on your local machine
for development and testing purposes.See deployment
for notes on how to deploy the project on a live system.

Requirements
This project may have some requeriments you need to meet in order to compile it. First of all, you need NodeJS in order to run javascript on the console, you can go to the NodeJS site and follow trough the installation process.After you get the node command on the console you will have the node package manager npm as well.  

Install
In order to start using the project you need to clone it to your computer. Or you can download the the zip version.

After you have it on you pc, you need to go in the console to the project folder and execute the following command to gather all the dependencies.

npm install


Contributing to < project_name >
    To contribute to < project_name > , follow these steps:

    Fork this repository.
Create a branch: git checkout - b < branch_name > .
Make your changes and commit them: git commit - m '<commit_message>'
Push to the original branch: git push origin < project_name > /<location>
Create the pull request.
Alternatively see the GitHub documentation on creating a pull request.

Contact
If you want to contact me you can reach me at your_email @address.com.

License
This project uses the following license: < license_name > .


Running the tests
Explain how to run the automated tests
for this system

Break down into end to end tests
Explain what these tests test and why

Give an example

To the extent possible under law, Matias Singers has waived all copyright and related or neighboring rights to this work.

</html>`;


// TODO: Create a function to initialize app
const init = () => {
        promptUser()
            .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
            .then(() => console.log('Successfully wrote to README.md'))
            .catch((err) => console.error(err));
}

// Function call to initialize app
init();
