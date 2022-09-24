const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o7t62h",
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/Testes/*.js'
  },
});
