exports.config = {
  hostname: "hub-cloud.browserstack.com",
  path: "/wd/hub",
  user: process.env.BROWSERSTACK_USERNAME || "saidineshnariset_bXhTn6",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "Y4qQbVyyDJdVCiJf4KiA",

  specs: ["./test/specs/**/*.js"],
  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:app": "bs://e1f066488f9802f6bf5aee929588bc1786355afa",
      "appium:deviceName": "Samsung Galaxy S23",
      "appium:platformVersion": "13.0",
      "appium:allowInvisibleElements": true,
      "bstack:options": {
        projectName: "Encore Hackathon",
        buildName: "Encore Hackathon",
        sessionName: "VIP booking price validation",
      },
    },
  ],

  logLevel: "info",
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: { ui: "bdd", timeout: 120000 },
};
