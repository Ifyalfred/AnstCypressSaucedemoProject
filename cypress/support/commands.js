

Cypress.Commands.add("typeTextCommand", (selector, text) => {
    cy.get(selector).type(text, { log: false });
  });

