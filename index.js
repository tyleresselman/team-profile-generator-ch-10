const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const teamList = require("./src/teamList");

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const teamMembers = [];

const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter name of Manager.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter ID of Manager.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter email of Manager.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter office number of Manager.',
            name: 'officeNumber'
        }
    ])
    .then((answers) => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(newManager);
        newEntry();
    })
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter name of engineer.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter ID of engineer.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter email of engineer.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter link to GitHub page of engineer.',
            name: 'github'
        }
    ])
    .then((answers) => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(newEngineer);
        newEntry();

    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter name of intern.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter ID of intern.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter email of intern.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter school attended by intern.',
            name: 'school'
        }
    ])
    .then((answers) => {
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(newIntern)
        newEntry();
    })
};

const newEntry = () => {
    inquirer.prompt([
        {
            type:'list',
            message: 'Would you like to add another member to the team? Or shall we create your team list?',
            choices: ['Add a new engineer', 'Add a new intern', 'Create the team list'],
            name: 'options'
        }
    ])
    .then((answer) => {
        switch(answer.options){
            case 'Add a new engineer':
                engineerQuestions();
                break;
            case 'Add a new intern':
                internQuestions();
                break;
            default: 
                createTeam();
                break;

        }
    })

};

const createTeam = () => {
    fs.writeFile('./dist/index.html', teamList(teamMembers), (err) =>
    err ? console.log(err) : console.log ('Done! Go check out your team list.'));
};

managerQuestions();

