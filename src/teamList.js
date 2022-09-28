const createTeam = (teamMembers) => {
    const html = [];
    
    const managerCreate = newManager => {
        let managerCard = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${newManager.name}</h3>
                <h5>Manager</h5>
            </div>
            <ul class="list-group">
                <li class"list-group-item">ID number: ${newManager.id}</li>
                <li class"list-group-item">Email: <span id="email"><a href="mailto:${newManager.email}">${newManager.email}</a></span></li>
                <li class"list-group-item">Office number: ${newManager.officeNumber}</li>
            </ul>
        </div>`

        html.push(managerCard);
    }
    const engineerCreate = newEngineer => {
    let engineerCard = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${newEngineer.name}</h3>
                <h5>Engineer</h5>
            </div>
            <ul class="list-group">
                <li class="list-item">ID number: ${newEngineer.id}</li>
                <li class="list-item">Email: <span id="email"><a href="mailto:${newEngineer.email}">${newEngineer.email}</a></span></li>
                <li class="list-item">GitHub page: <a href="https://github.com/${newEngineer.github}">${newEngineer.github}</a></li>
            </ul>
        </div>`

        html.push(engineerCard);
    }
    const internCreate = newIntern => {
        let internCard = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${newIntern.name}</h3>
                <h5>Intern</h5>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID number: ${newIntern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${newIntern.email}">${newIntern.email}</a></span></li>
                <li class="list-group-item">School: ${newIntern.school}</li>
            </ul>
        </div>`

        html.push(internCard);
    }

    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager"){
        managerCreate(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Engineer"){
        engineerCreate(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Intern"){
        internCreate(teamMembers[i]);
        }
    }

    return html.join(""); 
}

module.exports = teamList => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>The Team</title>
    </head>
    <body>
        <header>
            <h1 class="text-center header">The Team</h1>
        </header>
        <main class="row justify-content-center">
            ${createTeam(teamList)}
        </main>
        
    </body>
    </html>`;

}