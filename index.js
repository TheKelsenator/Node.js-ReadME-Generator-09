
// TODO: Include packages needed for this application
const path = require ('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please add a brief discription of your project:"
  },
  // {
  //   type: "input",
  //   name: "contents"
  //   message: ""
  // },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know to use the repository?"
    // reference image / video instructions below
  },
  {
    type: "list",
    name: "license",
    message: "Select a license from the list below:",
    choices: ["Apache", "GNU", "MIT", "None"]
    // go to these websites
  },
  {
    type: "input",
    name: "contribute",
    message: "How can you contribute to the repository?"
    // forking
  },
  {
    type: "input",
    name: "tests",
    message: "How would you run your test?",
    default: "npm test"
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub user name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('READ.md', generateMarkdown(inquirerResponses));
});
}

// Function call to initialize app
init();
