module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    // 用 `vue-jest` 处理 `*.vue` 文件
    ".*\\.(vue)$": "vue-jest",
    // 用 `babel-jest` 处理 js
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/src/*.{js,vue}", "!**/node_modules/**", "!**/coverage/**"],
  snapshotSerializers: ['jest-serializer-vue']
}
