const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      config.browsers = config.browsers.concat({
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        version: '120.0.0.0',
        path: 'C:/Users/Kevin Fernando/AppData/Local/Google/Chrome/Application/chrome.exe',
        majorVersion: '120'
      })
      
      return config;

      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    }
  }
});