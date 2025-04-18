const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    baseUrl: "https://www.saucedemo.com/", // Ensure this URL is correct
    supportFile: "cypress/support/e2e.js", // Ensure this path is correct
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
          allure: true,
    },
  },
};
