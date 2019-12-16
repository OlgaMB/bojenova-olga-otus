// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    "setupFilesAfterEnv": ["./internals/jest/settings.js"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest"
    },
  };