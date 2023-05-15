// docs: https://jestjs.io/docs/configuration

export default {
  preset: "ts-jest",

  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
}
