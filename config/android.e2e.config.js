const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');

// Appium capabilities for Android E2E dry run (Appium 2 / W3C)
config.capabilities = [
    {
        platformName: 'Android',
        'appium:noReset': false,
        'appium:fullReset': false,
        maxInstances: 1,
        'appium:automationName': 'uiautomator2',
        'appium:deviceName': AndroidInfo.deviceName(),
        'appium:platformVersion': AndroidInfo.platFormVersion(),
        'appium:appPackage': AndroidInfo.appPackage(),
        'appium:appActivity': AndroidInfo.appActivity(),
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 120,
        'appium:appWaitActivity': 'com.saucelabs.mydemoapp.android.view.activities.*'
    }
];

// Run only the e-commerce E2E scenario for dry run / evaluation
config.cucumberOpts.tagExpression = '@e2e';

exports.config = config;
