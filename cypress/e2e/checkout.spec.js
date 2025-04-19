describe('Checkout Page Tests for Saucedemo', () => {
  beforeEach(() => {
    cy.loginAs('standard');
    const items = [
      'sauce-labs-backpack',
      'sauce-labs-bike-light',
      'sauce-labs-bolt-t-shirt',
      'sauce-labs-fleece-jacket',
      'sauce-labs-onesie',
    ];
    items.forEach((item) => {
      cy.get(`[data-test="add-to-cart-${item}"]`).click();
    });
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('#checkout').click();
  });

  // Test Case 1: Verify Checkout Page Elements
  it.only('should complete the checkout form and proceed', () => {
    cy.get('[data-test="firstName"]').type('Ifeanyi');
    cy.get('[data-test="lastName"]').type('Alfred');
    cy.get('[data-test="postalCode"]').type('012345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
  });

  // Test Case 2: Verify Checkout Overview Page Elements
  it('should verify checkout overview and complete the order', () => {
    cy.get('.summary_info').should('be.visible');
    cy.get('.summary_subtotal_label').should('be.visible');
    cy.get('.summary_tax_label').should('be.visible');
    cy.get('.summary_total_label').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
  });

  // Test Case 3: Verify Return to Inventory and Logout
  it('should return to inventory and logout', () => {
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url().should('include', '/');
    cy.contains('Swag Labs').should('be.visible');
    cy.get('#login-button').should('be.visible');
  });
});
