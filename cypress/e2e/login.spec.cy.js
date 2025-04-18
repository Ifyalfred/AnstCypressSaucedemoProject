describe('Login Test for Saucedemo Project with Multiple Users', () => {

    // Navigate to the site before all tests
    beforeEach(() => {
        cy.visit('/');
    });

    // Test Case 1: Navigated to accurate URL
    it('Test for Successful Navigation to website', () => {
            cy.url().should('include', 'saucedemo.com'); // Check if the URL contains 'saucedemo.com'
            cy.contains('Swag Labs').should('be.visible'); // Check if the page contains 'Swag Labs'
            cy.get('#login-button').should('be.visible'); // Check if the login button is visible
            });

    // Test Case 2: Verify Successful Login and Checkout
    it('Test for Successful Login for standard_user', () => {
            cy.loginAs("standard");  //  Call the custom command to login as standard_user
            cy.contains('Products').should('be.visible');
            cy.url().should('include', '/inventory.html');
            });

    // Test Case 3: Verify Unsuccessful Login for lockedOut Users
    it('Test for unsuccessful login for locked out user', () => {
            cy.loginAs("lockedout");  //  Call the custom command to login as locked_out_user  
            cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
            });

    // Test Case 4: Verify successful Login for Problem Users
    it('Test for Problem User Login and Checkout', () => {
            cy.loginAs("problem");  //  Call the custom command to login as problem_user
            cy.contains('Products').should('be.visible');
            cy.url().should('include', '/inventory.html');
            });

    // Test Case 5: Verify successful Login for Glitch Users
    it('Test for Performance Glitch User Login and Checkout', () => {
            cy.loginAs("performance"); 
            cy.contains('Products').should('be.visible');
            cy.url().should('include', '/inventory.html');
            });

    // Test Case 6: Verify successful Login for Error Users
    it('Test for Error User Login and Checkout', () => {
            cy.loginAs("error"); 
            cy.contains('Products').should('be.visible');
            cy.url().should('include', '/inventory.html');
            });

    // Test Case 7: Verify successful Login for Visual Users
    it('Test for Visual User Login and Checkout', () => {
            cy.loginAs("visual");
            cy.contains('Products').should('be.visible');
            cy.url().should('include', '/inventory.html');
    }); 
});

