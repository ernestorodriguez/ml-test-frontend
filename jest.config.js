module.exports = {
    setupFiles: [
        './jest.setup.js',
    ],
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    collectCoverageFrom: [
        '!<rootDir>/coverage/**',
        '!<rootDir>/build/**',
        '!<rootDir>/docs/**',
        '<rootDir>/**/*.js',
    ],
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
    testEnvironment: 'node',
};
