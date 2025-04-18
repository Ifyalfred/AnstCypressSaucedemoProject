
Cypress.Commands.add("loginAs", (role) => {
    const users = Cypress.env("users"); 
    const password = Cypress.env("password"); 
  
    if (!users || !users[role]) {
      throw new Error(`User role "${role}" not found in environment variables`);
    }
  
    cy.visit("/"); //  Fix: No "/login", just "/"
    cy.get('[data-test="username"]').type(users[role], { log: false });  // Hide username from Cypress logs
    cy.get('[data-test="password"]').type(password, { log: false });  // Hide password from logs
    cy.get("#login-button").click(); // Ensure the selector is correct
  });
  