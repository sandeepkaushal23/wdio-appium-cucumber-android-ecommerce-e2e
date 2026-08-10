const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');

// Appium capabilities (appium: prefix required for Appium 2 / W3C)
config.capabilities = [
    {
        platformName: 'Android',
        'appium:noReset': true,
        'appium:fullReset': false,
        maxInstances: 1,
        'appium:automationName': 'uiautomator2',
        'appium:deviceName': AndroidInfo.deviceName(),
        'appium:platformVersion': AndroidInfo.platFormVersion(),
        'appium:appPackage': AndroidInfo.appPackage(),
        'appium:appActivity': AndroidInfo.appActivity(),
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 120
    }
];

config.cucumberOpts.tagExpression = '@androidApp'; // sample + e2e scenarios tagged @androidApp

exports.config = config;
