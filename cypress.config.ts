import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';
const { GenerateCtrfReport } = require('cypress-ctrf-json-reporter')

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    setupNodeEvents(on, config) {
      new GenerateCtrfReport({
        on,
      })
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      new GenerateCtrfReport({
        on,
      })
    },
  },
});
