// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
        case '':
          badge = ''
          break;
    }
    return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
    switch (license){
        case 'MIT License':
            link = 'https://opensource.org/license/mit/'
            break;
        case 'Apache License 2.0':
            link = 'https://www.apache.org/licenses/LICENSE-2.0'
            break;
        case 'GNU General Public License (GPL)':
            link = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
            break;
        case '':
          link = ''
          break;
    }
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[${license}](${renderLicenseLink(license)}) ${renderLicenseBadge(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # (Title here)

    (badge image here)

    ## Description

    (description text here)

    ## Table of Contents 

    [Description](#description) \
    [Table of Contents](#table-of-contents) \
    [Installlation](#installlation) \
    [Usage](#usage) \
    [License](#license) \
    [Contributing](#contributing) \
    [Tests](#tests) \
    [Questions](#questions) 


    ## Installation

    (installation text here)

    ## Usage

    (usage text here)

    ## License

    (license text here)

    ## Contributing

    (contribution text here)

    ## Tests

    (test text here)

    ## Questions

    GitHub: [username here](github link here)
    Email: email here

  `;
}

module.exports = generateMarkdown;
