class AndroidInfo {
    static deviceName() {
        return 'emulator-5554';
    }

    static platFormVersion() {
        return '14';
    }

    static appName() {
        return 'mda-2.2.0-25.apk';
    }

    static appPackage() {
        return 'com.saucelabs.mydemoapp.android';
    }

    static appActivity() {
        // Splash routes into MainActivity / product catalog
        return 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity';
    }
}

module.exports = AndroidInfo;
