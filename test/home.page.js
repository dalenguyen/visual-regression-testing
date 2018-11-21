const wdio = require('webdriverio');

const browser = wdio.remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
}).init();

require('webdrivercss').init(browser);

const url = 'https://learn.visualregressiontesting.com/broke.html';
// const url = 'https://learn.visualregressiontesting.com/';

browser.url(url)
    .webdrivercss('homepage', [
        {
            name: 'header',
            elem: '.header'
        },
        {
            name: 'benefits',
            elem: '.benefits',
            screenWidth: [320, 640, 1024]
        }
    ])
    .end();