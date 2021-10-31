// npm packages and modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "houston",
    database: "office"
});

// db.connect(function(error) {
//   if (error) throw error;
//   console.log("connected at " + db.threadId + "\n");
//   promptUser();
  
// })

function promptUser() {
  inquirer
  .prompt([
    {
      type: "list",
      name: "choices",
      message: "What would you like to do ?",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role"
      ]
    }
  ])
  .then((answers) => {
    if (answers.choices === "View All Employees") {
      viewAllEmployees()
    }else if (answers.choices === "View All Roles") {
      viewAllRoles()
    }else if (answers.choices === "View All Departments") {
      viewAllDepartments()
    }else if (answers.choices === "Add a Department") {
      addDepartment()
    }else if (answers.choices === "Add a Role") {
      addRole()
    }else if (answers.choices === "Add an Employee") {
      addEmployee()
    }else if (answers.choices === "Update an Employee Role") {
      updateEmployeeRole()
    }
  });
}

function viewAllEmployees() {
  db.query(`SELECT * FROM employees`,
  function(err, res) {
    if (err) throw err
    console.table(res)
    promptUser()
})
}

function viewAllRoles() {
  const sql = `SELECT * FROM roles`
  db.query(sql, (err, res) => {
    if (err) throw err
    console.table(res)
    promptUser()
  }) 
}

function viewAllDepartments() {
  const sql = `SELECT * FROM departments`
  db.query(sql, (err, res) => {
    if (err) throw err
    console.table(res)
    promptUser()
  }) 
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role would you like to add?",
        name: "roleName"
      }
    ])
    .then(function(answer) {
      const sql = `INSERT INTO roles (employee_roles) VALUES (?)`;
      db.query(sql, (answer.roleName), (err, res) => {
        if (err) throw err;
      });

      const sql2 = `SELECT * FROM roles`;
      db.query(sql2, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
      })
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What department would you like to add?",
        name: "departmentName"
      }
    ])
    .then(function(answer) {
      const sql = `INSERT INTO departments (employee_departments) VALUES (?)`;
      db.query(sql, (answer.departmentName), (err, res) => {
        if (err) throw err;
      });

      const sql2 = `SELECT * FROM departments`;
      db.query(sql2, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
      })
    });
}


promptUser();

