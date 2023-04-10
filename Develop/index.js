// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const markDown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Project title:',
},
{
    type: 'input',
    name: 'description',
    message: 'Project description:'
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:'
},
{
    type: 'input',
    name: 'usage',
    message: 'Project usage instructions:' 
},
{
    type: 'input',
    name: 'contribution',
    message: 'Contribution information:'
},
{
    type: 'input',
    name: 'questions',
    message: 'For questions(email):'
},
{
    type: 'input',
    name: 'questions',
    message: 'For questions(github):'
},
{
    type: 'input',
    name: 'license',
    message: 'License Type:',
    choices: [
        'No license',
        'MIT',
        'ISC',
        'GNU',
    ]
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
} 

// TODO: Create a function to initialize app
function init() {
     inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
       
        fs.createWriteStream('Generating README.md',  
        function(err) {
            if(err){
                console.log('Could not save file')
            } else {
              console.log('Success: new README generated inside the current folder')  
            }
        })
        writeToFile('README.md', markDown({...answers}))
        
    })
    .catch((error)=>{
        console.log(error)
    })
}

// Function call to initialize app
init();
