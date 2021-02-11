const { prompt } = require('inquirer');
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log("Portfolio completed! Check out index.html to see the output!")
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ])
    
}
const promptProject = portforlioData => {
    if (!portforlioData.projects) {
        portforlioData.projects = [];
    }
    
    console.log(`
=====================
  Add a New Project
=====================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to you project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portforlioData.projects.push(projectData)
        if (projectData.confirmAddProject) {
            return promptProject(portforlioData);
        } else {
            return portforlioData;
        }
    });
}


promptUser()
    .then(promptProject)
    .then(portforlioData => {
        console.log(portforlioData);
    });



