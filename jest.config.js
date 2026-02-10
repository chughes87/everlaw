module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/cli.js' // Exclude CLI entry point from coverage
  ],
  testMatch: [
    '**/test/**/*.test.js'
  ],
  verbose: true
};
