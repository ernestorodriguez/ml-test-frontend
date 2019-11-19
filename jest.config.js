module.exports = {
    setupFiles: [
        './jest.setup.js',
    ],
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    collectCoverageFrom: [
        '!jest.config.js',
        '!webpack.config.js',
        '!<rootDir>/app/client/**', // this is gonna be covered by acceptance of client
        '!<rootDir>/coverage/**',
        '!<rootDir>/build/**',
        '!<rootDir>/docs/**',
        '<rootDir>/**/*.js',
    ],
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
    testEnvironment: 'node',
};
