// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const markDown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

class Question {
    constructor(name, message) {
        this.name = name
        this.message = message
    }
}

class InputQuestion extends Question {
    constructor(name, message) {
        super(name, message)
        this.type = "input"
    }
}

class ListQuestion extends Question {
    constructor(name, message, choices) {
        super(name, message)
        this.type = "list",
            this.choices = choices
    }
}

const questions = [
    new InputQuestion("title", "What's the title of your project"),
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
        name: 'email',
        message: 'For questions(email):'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github):'
    },
    new ListQuestion("license", "License type:", [
        'No license',
        'MIT',
        'ISC',
        'GNU',
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)

        fs.createWriteStream('Generating README.md',
            function (err) {
                if (err) {
                    console.log('Could not save file')
                } else {
                    console.log('Success: new README generated inside the current folder')
                }
            })
        writeToFile('README.md', markDown({ ...answers }))

    })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();



