﻿'use strict';

module.exports = function (config) {
    config.set(
        {

            basePath: 'wwwroot',
            // Frameworks to use
            frameworks: ['jasmine', 'requirejs'],

            files: ['lib/angular/angular.js', { pattern: '**/*.js', included: false }, { pattern: '**/*.json', included: false }, '../test-main.js', '../node_modules/karma-read-json/karma-read-json.js'],

            exclude: ['lib/**/*spec.js', 'lib/**/*test.js', 'lib/**/karma.conf.js'],

            // Test results reporter to use
            // Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
            reporters: ['progress', 'junit'],
            junitReporter: {
                outputFile : "test-results.xml"
            },
            // Web server port
            port: 9876,

            // Enable / disable colors in the output (reporters and logs)
            colors: true,

            // Level of logging
            // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_DEBUG,

            // Enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

            // Start these browsers, currently available:
            // - Chrome
            // - ChromeCanary
            // - Firefox
            // - Opera
            // - Safari (only Mac)
            // - PhantomJS
            // - IE (only Windows)
            browsers: ['PhantomJS'],

            // If browser does not capture in given timeout [ms], kill it
            captureTimeout: 60000,

            // Continuous Integration mode
            // If true, it capture browsers, run tests and exit
            singleRun: false

        })

}