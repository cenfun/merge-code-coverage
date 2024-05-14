import coverageOptions from './mcr.config.unit.js';

export default {

    testMatch: [
        '**/test/unit/*.test.js'
    ],

    // Enable coverage
    collectCoverage: true,
    // Recommended to use `v8` to support the generation of native v8 coverage reports.
    coverageProvider: 'v8',
    // Monocart can also support all coverage reports, so there is no need to set up reports here.
    coverageReporters: ['none'],

    reporters: [
        // If custom reporters are specified, the default Jest reporter will be overridden. If you wish to keep it, 'default' must be passed as a reporters name:
        'default',

        // Monocart custom reporter to generate coverage reports.
        ['jest-monocart-coverage', coverageOptions]
    ]

};
