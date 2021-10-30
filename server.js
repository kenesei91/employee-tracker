// npm packages and modules
const inquirer = require('inquirer');


inquirer.prompt([
    {
        type: "list",
        name: "roles",
        message: "What would you like to do ?",
        choices: ['View All Employees', 'View All Roles', 'View All Departments']
    },
])

.then(({roles}) => {
    if (roles === "View All Employees") {
        
    }
    
});