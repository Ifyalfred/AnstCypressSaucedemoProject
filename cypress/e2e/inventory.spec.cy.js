describe('Saucedemo Website - Page Functionality Tests', () => {
  // Load the test data from the fixture file
  let testData; // Declare the variable outside the before block
  let LoginPage; // Declare the variable outside the before block

  // Load test data before running tests
  beforeEach(() => {
    cy.fixture('testData.json').then((data) => {
      testData = data; // Fixed callback function
      LoginPage = data.LoginPage; // Fixed callback function
      cy.loginAs('standard');
    });
  });

  // Test Case 1: Verify the functionality of the inventory page
  it('Verify the Page Functionality and Element Visibility', () => {
    cy.url().should('include', '/inventory.html');

    // Test Case 2: Verify the Inventory items visibility
    cy.contains('Swag Labs').should('be.visible');
    cy.contains('Products').should('be.visible');
    cy.get('.header_label').should('be.visible');
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.contains('Sauce Labs Bike Light').should('be.visible');
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible');
    cy.contains('Sauce Labs Fleece Jacket').should('be.visible');
    cy.contains('Sauce Labs Onesie').should('be.visible');

    // Test Case 3: Verify the Meun items visibility
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="inventory-sidebar-link"]').should('be.visible');
    cy.get('[data-test="about-sidebar-link"]').should('be.visible');
    cy.get('[data-test="logout-sidebar-link"]').should('be.visible');
    cy.get('[data-test="reset-sidebar-link"]').should('be.visible');

    // Test Case 4: Verify user can add items to cart in the inventory page
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    // Test Case 5: Verify the Cart functionality
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').should('contain', '5').click();
    cy.url().should('include', '/cart.html');
    cy.get('.shopping_cart_badge').should('contain.text', '5');
    cy.get('#checkout').should('be.visible').click();

    // Test Case 6: Verify Checkout Page Elements
    cy.get('[data-test="firstName"]').type('Ifeanyi');
    cy.get('[data-test="lastName"]').type('Alfred');
    cy.get('[data-test="postalCode"]').type('012345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');

    // Test Case 7: Verify Checkout Overview Page Elements
    cy.get('.summary_info').should('be.visible');
    cy.get('.summary_subtotal_label').should('be.visible');
    cy.get('.summary_tax_label').should('be.visible');
    cy.get('.summary_total_label').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');

    // Test Case 8: Verify Return to Inventory and Logout
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url().should('include', '/');
    cy.contains('Swag Labs').should('be.visible');
    cy.get('#login-button').should('be.visible');
  });
});
