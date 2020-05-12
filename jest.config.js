const path = require('path');

module.exports = {
  clearMocks: true, // Automatically clear mock calls and instances before every test.
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js', // Setup jest-enzyme library
    path.resolve(__dirname, 'client', 'tests', 'setupTests.js'), // Configure enzyme react adapter
  ],
};
