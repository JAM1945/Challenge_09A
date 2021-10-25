// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMePage = require('./src/readme-template');

// TODO: Create an array of questions for user input
const questions = ()=>{
    return inquirer.prompt([

{
        type: 'input',
        name: 'projecTitle',
        message: 'What is your project title?'
      },

      {
        type: 'input',
        name: 'projectDescription',
        message: 'Describe your project?'
      },

      {
        type: 'input',
        name: 'applicationSite',
        message: 'Please provide the link to your application if deployed?'
      },

      {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please describe any steps to follow in order to install project or software?'
      },

      {
        type: 'input',
        name: 'usageInstructions',
        message: 'Are there any instructions or examples for usage of your project?'
      },

      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please list any contributors, collaborators or third party resources utilized in creating project?'
      },

      {
        type: 'input',
        name: 'tests',
        message: 'Have you prepared any test for you application and can you provide examples of test if they exist?'
      },

      {
        type: 'checkbox',
        name: 'licenses',
        message: 'Licenses that apply?',
        choices: ['MIT', 'GNU_GPLv3', 'ISC', 'Apache_License_2.0', 'GNU_GPLv2', 'Boost_Software_License2.0', 'Unlicensed']
      },
])};

      questions().then(answers=>console.log(answers));
  


// TODO: Create a function to write README file
    // function writeToFile(, data) {}

fs.writeFile('./READMEOutput.md', generateReadMePage, err => {
  if(err) thrownewError(err);


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
