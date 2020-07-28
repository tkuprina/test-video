const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'test/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://prometheantv.github.io',
      show: false,
      windowSize: '1200x900',
      chrome : {
        args: ['--no-sandbox'],
        executablePath: process.env.CHROME_PATH || '',
      }
    }
  },
  include: {
    I: './steps/steps_file.js',
    PlayerPage: './pages/PlayerPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'test-video',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}