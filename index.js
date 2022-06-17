const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const { generateHTML } = require("./src/generateHTML");

const listOfEmployees = [];

const teamMembers = () => {
	const promptMgr = () => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "name",
					message: "Manager's name: ",
				},
				{
					type: "number",
					name: "id",
					message: "Manager's ID: ",
				},
				{
					type: "input",
					name: "email",
					message: "Manager's email: ",
				},
				{
					type: "number",
					name: "officeNumber",
					message: "Manager's office number: ",
				},
				{
					type: "input",
					name: "github",
					message: "Enter your GitHub Username",
				},
			])
			.then((managerInput) => {
				const { name, id, email, officeNumber } = managerInput;
				const manager = new Manager(name, id, email, officeNumber);
				listOfEmployees.push(manager);
				createTeam();
			});
	}; // end promptMgr
	promptMgr();

	const createTeam = () => {
		inquirer
			.prompt([
				{
					type: "list",
					name: "addNewEmployee",
					message: "Employee type to add: ",
					choices: ["Engineer", "Intern", "Don't add any more"],
				},
			])
			.then((userInput) => {
				switch (userInput.addNewEmployee) {
					case "Engineer":
						addEngineer();
						break;

					case "Intern":
						addIntern();
						break;

					default:
						createHTML();
				}
			});
	}; // end createTeam

	const addEngineer = () => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "name",
					message: "Engineer's name: ",
				},
				{
					type: "number",
					name: "id",
					message: "Engineer's ID: ",
				},
				{
					type: "input",
					name: "email",
					message: "Engineer's email: ",
				},
				{
					type: "input",
					name: "github",
					message: "Engineer's GitHub: ",
				},
			])
			.then((engineerInput) => {
				const { name, id, email, github } = engineerInput;
				const engineer = new Engineer(name, id, email, github);
				listOfEmployees.push(engineer);
                createTeam();
			});
	}; // end addEngineer

	const addIntern = () => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "name",
					message: "Intern's name: ",
				},
				{
					type: "number",
					name: "id",
					message: "Intern's ID: ",
				},
				{
					type: "input",
					name: "email",
					message: "Intern's email: ",
				},
				{
					type: "input",
					name: "school",
					message: "Intern's school: ",
				},
			])
			.then((internInput) => {
				const { name, id, email, school } = internInput;
				const intern = new Intern(name, id, email, school);
				listOfEmployees.push(intern);
                createTeam();
			});
	}; // end addIntern

	const createHTML = () => {
		fs.writeFile(
			"./dist/index.html",
			generateHTML(listOfEmployees),
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Team Profile Created");
				}
			}
		);
	}; // end createHTML 
}; // end teamMembers

teamMembers();
