# WebdriverIO + Appium + Cucumber — Android E2E Tech Test

Native Android automation using **WebdriverIO v6**, **Appium 2**, **Cucumber BDD**, and the **Page Object Model**.

## App under test

**Sauce Labs My Demo App** (native Android e-commerce demo)

- APK: `apps/mda-2.2.0-25.apk`
- Package: `com.saucelabs.mydemoapp.android`
- Source: https://github.com/saucelabs/my-demo-app-android/releases

## E2E scenario (14 BDD steps)

Feature: `src/featureFiles/ecommercePurchase.feature`  
Tag: `@e2e`

Flow covered:

1. Launch app  
2. Verify products catalog  
3. Open **Sauce Labs Backpack**  
4. Verify product title  
5. Verify price `$ 29.99`  
6. Select color **Blue**  
7. Increase quantity  
8. Add to cart  
9. Verify cart badge `2`  
10. Open cart  
11. Verify cart screen  
12. Verify product in cart  
13. Verify total `$ 59.98`  
14. Verify **Proceed To Checkout** is visible  

## Prerequisites

- Node.js 18+ (tested with Node 24)
- Android SDK + emulator (or physical device)
- Appium 2 + UiAutomator2 driver (installed via project / global)

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH
```

## Setup

```bash
npm install --ignore-scripts
npx appium driver install uiautomator2@3.8.0   # if not already installed
```

Install the APK on the emulator/device:

```bash
adb install -r apps/mda-2.2.0-25.apk
```

Update device details in `config/android.info.js`:

- `deviceName` → `adb devices` id (e.g. `emulator-5554`)
- `platFormVersion` → Android version (e.g. `14`)

## Run E2E dry run (evaluation command)

```bash
# Start emulator first, then:
npm run android:e2e
```

## Reports

After a run:

- HTML: `reports/html/index.html`
- JSON: `reports/json/`

```bash
open reports/html/index.html
```

## Project structure (POM)

```
src/
├── featureFiles/ecommercePurchase.feature
├── stepDefinitions/ecommerce.steps.js
├── pages/ecommerce.page.js
└── screens/native/android/ecommerce.screen.js
config/
├── android.e2e.config.js   # @e2e tag + Appium caps
├── android.info.js         # device + app package/activity
└── wdio.conf.js            # cucumber + HTML reporter
```

## Pre-GitHub verification checklist

Use this before publishing (do **not** push until all pass):

1. Emulator/device visible: `adb devices`
2. APK installed: `adb shell pm path com.saucelabs.mydemoapp.android`
3. `config/android.info.js` matches your device
4. `npm run android:e2e` exits successfully (`1 passed`)
5. Open `reports/html/index.html` and confirm all 14 steps are green
6. Feature file has **≥ 10** steps
7. Step / page / screen files exist for the e-commerce flow
8. README documents setup + run command

## Other scripts

| Command | Purpose |
|---------|---------|
| `npm run android:e2e` | E-commerce E2E (`@e2e`) — **use for demo** |
| `npm run android` | All `@androidApp` scenarios |
| `npm run lint` | ESLint |
