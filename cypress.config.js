const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/signin',
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,

    chromeWebSecurity: false,
  },
  fixturesFolder: false,

});

