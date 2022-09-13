// Create Manager Card
const createManager = (employee) => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${employee.name}</h3>
            <h4>Manager</h4><i class="material-icons">face</i>
        </div>
        <div class="card-body">
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p>Office Number: ${employee.officeNumber}</p>
        </div>
    </div>
</div>`
};

// Create Engineer Card
const createEngineer = (employee) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop</i>
            </div>
            <div class="card-body">
                <p>ID: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Github: <a href="https://github.com/${employee.github}">${employee.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// Create Intern card 
const createIntern = (employee) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>
            <div class="card-body">
                <p>ID: ${employee.id}</p>
                <p>Email:<a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>School: ${employee.school}</p>
            </div>
    </div>
</div>
    `
};

// Push array to page 
generateHTML = (data) => {

    // Array for cards 
    pageArr = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // Manager Card
        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArr.push(managerCard);
        }

        // Engineer Card
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            pageArr.push(engineerCard);
        }

        // Intern Card
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            pageArr.push(internCard);
        }
        
    }

    const employeeCards = pageArr.join('')

    // Return to page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// Generate html page 
const generateTeamPage = (employeeCards) => {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <h1>TEAM PROFILE</h1>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateHTML; 