import { defineConfig } from "cypress";

export default defineConfig({
  video: true,               
  videosFolder: "cypress/videos", 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: "http://localhost:5173", 
    specPattern: "cypress/e2e/**/*.cy.{js,ts}", // ищет тесты только в этой папке
  },
});
