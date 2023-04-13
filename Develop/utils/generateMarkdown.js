// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/MIT-strait2thepoint-blueviolet.svg)](https://opensource.org/licenses/MIT)',
    isc: '[![Liscense: ISC](https://img.shields.io/badge/ISC-strait2thepoint-ff69b4.svg)](https://opensource.org/licenses/ISC)',
    gnu: '[![License: GNU](https://img.shields.io/badge/GNU-strait2thepoint-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
  return badges[license.toLowerCase()]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("trying to render License Link")
  const licenseLinks ={
    mit: '[MIT](https://choosealicense.com/mit/)',
    isc:'[ISC](https://choosealicense.com/licenses/isc/)',
    gnu: '[GNU](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  return licenseLinks[license.toLowerCase()]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("Just got my license in render license section")
  if(license){
    return `Licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkDown(data) {
console.log("This is the data in my markdown")
console.log(data)

  return `# ${data.title}

${renderLicenseBadge(data.license)}
    ## Table of Content
    -[Project description](#Description)
    -[Usage](#Usage)
    -[Contribution](#Contribution)
    -[Installation](#Installation)
    -[Questions](#Questions)
    -[License](#License)
    
    ## Description
    ${data.description}
    
    ## Usage
    ${data.usage}
    
    ## Installation
    ${data.installation}
    
    ## Contributing
    ${data.contribution}
    
    ## Questions
    ${data.email}
    ${data.github}
    
    ## License
    ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkDown;
