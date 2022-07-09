module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    collectCoverageFrom: [
        "**/*.{ts,vue}",
        "!**/node_modules/**",
        "!**/*.d.ts",
        "!**/*.config.{ts,js}",
        "!**/main.{ts,js}",
    ],
    testMatch: [
        "**/*.spec.ts",
        "**/*.spec.js",
    ],
    // coverageReporters: [
    //     "text-summary",
    //     "lcov"
    // ],

}