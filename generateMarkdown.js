// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge (license){
  if (license == 'MIT'){

  return'[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}
else
{
  return ''
}
}

// TODO: Create a function that returns the license link

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `#${data.title}
##${renderLicenseBadge(data.license)}
## Description
    ${data.description}
    ## Table of Contents
    <!--ts-->
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    <!--te-->
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    Email:${data.email}
    GitHub:${data.github}

`;
}

module.exports = generateMarkdown;
