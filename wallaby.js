
module.exports = function (wallaby) {

    return {
        files: [
            'src/**/*.ts',
            '!src/**/*.spec.ts',
            { pattern: 'src/**/*.json', instrument: false, load: false },
            { pattern: 'artifacts/**/*', instrument: false, load: false },
            { pattern: 'spec/**/*', instrument: false, load: false }
        ],
        tests: [
            'src/**/*.spec.ts'
        ],
        compilers: {
            '**/*.ts': wallaby.compilers.typeScript()
        },
        testFramework: 'jest',
        env: {
            type: 'node',
            runner: 'node'
        },

        setup: function (wallaby) {
            // var jestConfig = require("./spec/jest-config.json");
            // wallaby.testFramework.configure(jestConfig);
        }
    };
};