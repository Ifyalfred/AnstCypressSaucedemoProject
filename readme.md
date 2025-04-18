## About SwagLabs

SwagLabs also know as Saucedemo is a demo e-commerce website used for testing and training in web automation.
It provides a controlled environment to simulate real-world user interactions such as login, adding products to the cart, and completing checkout.
The website is designed to mimic the functionality of a real e-commerce platform, making it an ideal choice.

## Project Overview

This project is a Cypress-based test automation suite designed for testing the login functionality of the Saucedemo website.
It includes various test cases to verify login success and failure scenarios using different user credentials.
This project contains Cypress test scripts for automating login scenarios on the Saucedemo website.
The test cases validate different user login scenarios to ensure proper authentication and redirection to the dashboard.

## What is CYPRESS?

Cypress is a JavaScript-based end-to-end testing framework used for web test automation.
It provides a simple and powerful way to test modern web applications with features such as fast execution, real-time reloading, and automatic waiting.

## Technologies Used

- Cypress: For end-to-end testing
- JavaScript: For writing test scripts
- Saucedemo Website: E-commerce website for testing purposes
- Node.js : For testing login functionality
- Allure Report: For detailed analysis of test execution, including test steps, start time, duration, and status

## Project Structure

The project structure is organized as follows:

- `allures-reporter`: The repository for efficient reporting
- `allures-results`: The results history of all reporting requests
- `cypress`: The folders contains Cypress configuration test files and plugins
- `node_modules`: The dependencies installed via npm
- `cypress.config.js`: Cypress configuration file for project settings.
- `cypress/support/commands.js`: Custom commands for Cypress
- `package.json`: The project configuration, dependencies and scripts.
- `README.md`: Project documentation and instructions.

## Setup and Installation

To set up the project, follow these steps:

1. Clone the repository using the command `git clone <https://github.com/yourusername/saucedemo-project.git>
2. Navigate to the Project Directory: cd ANST_CYPRESS_PROJECT_TDD
3. Install Node.js
4. Install the required dependencies npm by running `npm install` in the project directory.
5. Install Cypress using npm: `npm install cypress`
6. Start the Cypress server by running `npx cypress open` in the project directory.
7. Run the tests in headless mode by running `npx cypress run --headless`
8. Run the tests in a specific browser by running `npx cypress run` --browser chrome
9. Run the tests in parallel mode by running `npx cypress run --parallel`
10. Run the tests in a specific environment by running `npx cypress run --env ENV=dev` in the project directory.
11. Generate Allure report by running `npx cypress run --reporter cypress-mure-reporter`in the project directory.
12. Open the Allure report by running `npx allure serve` in the project directory.

## Test Cases

The test cases are written in Cypress and cover various scenarios. This test suite includes the following scenarios:

1. Successful Login: Validates that a user with correct credentials can log in and access the inventory page.
2. Unsuccessful Login for Locked-out User: Ensures that a locked-out user cannot log in.
3. Login for Problem Users: Tests login for users with specific issues.
4. Performance Glitch User Login: Tests login behavior for users experiencing performance issues.
5. Error User Login: Tests login for users expected to encounter errors.
6. Visual User Login: Tests login for users with UI-related issues.

## Conclusion

In conclusion, this project is a comprehensive test automation suite for the Saucedemo website using Cypress.
The test cases are written in Cypress.
It covers various test cases including successful login, unsuccessful login for locked users,checkout, product and user functionality.
The project structure is well-organized, and the setup and installation process is straightforward.
This Cypress project provides an automated way to verify login functionality for different user scenarios.
It helps ensure that authentication mechanisms work as expected and identifies potential issues in the login process.

🚀
