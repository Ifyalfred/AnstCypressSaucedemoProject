describe('Page Functionality Test for Saucedemo Project', () => {

    // Load the test data from the fixture file
    let testData; // Declare the variable outside the before block
    let LoginPage; // Declare the variable outside the before block
    
    // Load test data before running tests
    before(() => {
        cy.fixture('testData.json').then((data) => {
        testData = data; // Fixed callback function
        LoginPage = data.LoginPage; // Fixed callback function
        });
    });

    it('Test for Successful Navigation to Login Page of Saucedemo website', () => {
        cy.visit('/'); // Visit the base URL
        });

    // Check the functionality and visibility of the login page elements
    it('Login Page Functionality Test for Saucedemo website', () => {
        cy.visit('/');
        cy.contains('Swag Labs').should('be.visible');
        cy.get('#login-button').should('be.visible'); 
        cy.get('[data-test="username"]').should('be.visible');
        cy.get('[data-test="password"]').should('be.visible');
        cy.loginAs('standard'); 
        cy.url().should('include', '/inventory.html');
        cy.contains('Products').should('be.visible'); 
        });

    // Check the visiblity of the inventory items in the inventory page
    it('Inventory Page Functionality Test for Saucedemo website', () => {
        cy.loginAs('standard'); 
        cy.url().should('include', '/inventory.html'); 
        
        // Inventory items visibility
        cy.contains('Swag Labs').should('be.visible');
        cy.contains('Products').should('be.visible'); 
        cy.contains('Sauce Labs Backpack').should('be.visible');
        cy.contains('Sauce Labs Bike Light').should('be.visible');
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible');
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible');
        cy.contains('Sauce Labs Onesie').should('be.visible'); 

        // Meun items visibility
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="inventory-sidebar-link"]').should('be.visible');
        cy.get('[data-test="about-sidebar-link"]').should('be.visible');
        cy.get('[data-test="logout-sidebar-link"]').should('be.visible');
        cy.get('[data-test="reset-sidebar-link"]').should('be.visible');

        //Add items to cart and verify the cart icon in the inventory page
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        
        // Cart checks functionality 
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').should('contain', '5').click();
        cy.url().should('include', '/cart.html');
        cy.get('.shopping_cart_badge').should('contain.text', '5');
        cy.get('#checkout').should('be.visible').click();
        
        // Checkout Page Functionality 
        cy.get('[data-test="firstName"]').should('be.visible').type('Ifeanyi');
        cy.get('[data-test="lastName"]').should('be.visible').type('Alfred');
        cy.get('[data-test="postalCode"]').should('be.visible').type('012345');
        cy.get('[data-test="continue"]').should('be.visible').click();  
        cy.url().should('include', '/checkout-step-two.html');

        // Checkout overview Page Functionality
        cy.get('.summary_info').should('be.visible');
        cy.get('.summary_subtotal_label').should('be.visible');
        cy.get('.summary_tax_label').should('be.visible');
        cy.get('.summary_total_label').should('be.visible');
        cy.get('[data-test="total-label"]').should('be.visible');
        cy.get('[data-test="payment-info-value"]').should('be.visible');
        cy.contains('Sauce Labs Backpack').should('be.visible');
        cy.contains('Sauce Labs Bike Light').should('be.visible');
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible');
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible');
        cy.contains('Sauce Labs Onesie').should('be.visible'); 
        cy.get('[data-test="finish"]').should('be.visible').click();
        cy.url().should('include', '/checkout-complete.html');

        // Verify the order confirmation message    
        cy.get('.complete-header').should('be.visible');
        cy.get('.complete-text').should('be.visible');
        cy.contains('Thank you for your order!').should('be.visible');
        cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible');
        

        // Back to inventory and logout
        cy.get('[data-test="back-to-products"]').should('be.visible').click();
        cy.url().should('include', '/inventory.html');
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').should('be.visible').click();
        cy.url().should('include', '/');
        cy.contains('Swag Labs').should('be.visible');
        cy.get('#login-button').should('be.visible');
        });
});

