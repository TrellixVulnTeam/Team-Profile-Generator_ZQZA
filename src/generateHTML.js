//function to generate manager card with information
const generateManager = (manager) => {
	return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${manager.name}</h3>
            <h4><i class="fa-solid fa-user-tie"></i> Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}" target="blank">${manager.email}</a></p>
            <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
    `;
};
//function to generate engineer card with information
const generateEngineer = (engineer) => {
	return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${engineer.name}</h3>
            <h4> <i class="fa-solid fa-glasses"></i> Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id"> Id: ${engineer.id}</p>
            <p class="email"> Email: <a href= "mailto:${engineer.email}" target="blank">${engineer.email}</a></p>
            <p class="gitHub">GitHub: <a href="https://github.com/${engineer.gitHub}" target="blank">${engineer.gitHub}</a></p>
        </div>
    </div>
</div>
    `;
};
//function to generate intern card with information
const generateIntern = (intern) => {
	return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
                <h3>${intern.name}</h3>
                <h4> <i class="fa-solid fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class="card-body">
                <p class="id"> Id: ${intern.id}</p>
                <p class="email">Email: <a href= "mailto:${intern.email}" target="blank">${intern.email}</a></p>
                <p class="school"> School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};
//push the array to the page
const htmlPageContent = (data) => {
	cardsArray = [];
	for (let i = 0; i < data.length; i++) {
		const employee = data[i];
		const role = employee.getRole();
		//call each function--manager, engineer, intern from above
		switch (role) {
			case "Manager":
				generateManager(employee);
				cardsArray.push(generateManager(employee));
				break;
			case "Engineer":
				generateEngineer(employee);
				cardsArray.push(generateEngineer(employee));
				break;
			case "Intern":
				generateIntern(employee);
				cardsArray.push(generateIntern(employee));
				break;
		}
	}
	//joining strings
	const teamCards = cardsArray.join("");
	return teamCards;
};

//generate HTML page
const generateHTML = function (teamCards) {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/2a5ab65e4d.js" crossorigin="anonymous"></script>
    <link rel ="stylesheet" href="style.css">
    <title>TeamProfileGenerator</title>
</head>
<body>
    <div class=" jumbotron-fluid" style="background-color: rgb(231, 141, 129); color: white; text-align: center; padding:30px;">
    <div class="container">
            <h1 class="display-4">Meet the Team</h1>
    </div>
    </div>
    <div class= "container">
    <div class = "row justify-content-center">
        ${htmlPageContent(teamCards)}
   </div>
    </div>
</body>
</html>
    `;
};
module.exports = { generateHTML };
