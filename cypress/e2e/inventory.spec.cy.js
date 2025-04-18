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

    it(' should successfully navigate to the Login Page', () => {
        cy.visit('/'); // Visit the base URL
        cy.contains('Swag Labs').should('be.visible'); // Check if the logo is visible
    });

        // Check the functionality and visibility of the login page elements
    it('should display all login page elements correctly', () => {
        cy.visit('/');
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
    });
});


