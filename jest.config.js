module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  rootDir: "./",
  collectCoverage: true,
  moduleNameMapper: {
    "/^@/(.*)$/": "C:\Users\hoann\Documents\projetos\inventory-control\src\$1",
  },
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**' 
  ],
  coveragePathIgnorePatterns: [
    "src/background.js",
    "src/router/index.js"
  ],
  resolver: undefined,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};
