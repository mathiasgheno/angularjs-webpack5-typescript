const path = require('path');

module.exports = function(config) {

  config.set({
    singleRun: true,

    browsers: ['headlessChrome'],

    customLaunchers: {
      headlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    client:{
      clearContext: false
    },

    frameworks: [
      'jasmine',
      'webpack'
    ],

    files: [
      './test/test.ts'
    ],

    reporters: ['spec', 'coverage-istanbul'],

    preprocessors: {
      './test/test.ts': ['webpack'],
    },

    webpack: require('./webpack.test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    logLevel: config.LOG_INFO,

    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'test/reports/coverage'),
      fixWebpackSourcePaths: true,
      reports: ['json', 'html', 'text-summary', 'text'],
      'report-config': {
        html: {
          subdir: 'html'
        },
        text: {
          file: 'text.txt'
        },
        'text-summary': {
          file: 'text-summary.txt'
        }
      }
    },

    specReporter: {
      failFast: true,
      suppressFailed: false,
      suppressSkipped: true
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter'),
      require('karma-coverage-istanbul-reporter')
    ]
  });
};
