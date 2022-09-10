const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

// Import Employee classes
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require ('./lib/Engineer');

// Team Array
const teamArr = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID number"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number"
        }
    ]) .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager);
        console.log(manager);
    })
}

const addEmployee = () => {
    console.log("Add Employees to the team");
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Is this employee an Engineer or Intern?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID number"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's's email address"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the employee's school",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: "Do you want to add another team member?",
            default: false
        }
    ]) .then(employeeInput => {
        let { role, name, id, email, github, school, confirm } = employeeInput;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArr.push(employee);

        if (confirm) {
            return addEmployee();
        } else {
            return teamArr;
        }

    })
}

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, (err) =>
    err ? console.log(error) : console.log('Successly created index.html'));
}

addManager()
.then(addEmployee)
.then (teamArr => {
    return generateHTML(teamArr);
})
.then(indexHTML => {
    return writeFile(indexHTML);
})
.catch(err => {
    console.log(err);
});