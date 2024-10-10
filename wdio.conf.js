const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723, // Ensure Appium server is running on this port
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1, // Set to 1 for mobile testing to avoid concurrency issues
    capabilities: [{
        // Capabilities for local Appium web tests on a real Android device
        platformName: 'Android',
        'appium:platformVersion': '11.0', // Android version
        'appium:deviceName': 'Realme_C15', // Your device name
        'appium:udid':'76e2ed6c',
        'appium:app': path.join(__dirname, '/Apps/demo.apk'), // Path to your APK
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        'appium:fullContextList': true,
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [['allure', { outputDir: 'allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: ['appium'],
    appium: {
        command: 'appium',
    }
};
