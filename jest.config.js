const path = require('path');
const ROOT_DIR = require('./constants/ROOT_DIR');

module.exports = {
  clearMocks: true, // Automatically clear mock calls and instances before every test.
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js', // Setup jest-enzyme library
    path.resolve(ROOT_DIR, 'tests', 'setupTests.js'), // Configure enzyme react adapter
  ],
};
