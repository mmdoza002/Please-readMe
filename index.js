// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./generateMarkdown');
// const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    name:'title',
    message:'What would you like your title to be?',
},
{
    type:'input',
    name:'description',
    message:'Write out a description for your project.',
},
{
    type:'input',
    name:'installation',
    message:'What packages you need to install to make your file run.',
},
{
    type:'input',
    name:'usage',
    message:'Type in the direction for usage.',
},
{
    type:'input',
    name:'license',
    message:['None','MIT'],
},
{
    type: 'input',
    name: 'contributing',
    message: 'List of collaborators.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write out any tests for this program.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username.',
  },
];
  


// TODO: Create a function to write README file
// function init () {
//     inquirer.prompt(questions)
//       .then((answers) => fs.writeFile('generateReadMe.md', generateMarkdown(answers)))
//       .then(() => console.log('Successfully wrote to ReadMe'))
//       .catch((err) => console.error(err));
//   };

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
      console.log(answers);
      let createReadMe = generateReadMe(answers);
      console.log(createReadMe);
      fs.writeFile('generateReadMe.md', createReadMe, function (err) {
      console.log('Great Job!');
      })
  });
};


// 



// Function call to initialize app
init();

// new info
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed

// extension awsome screenshot

