const assert = require('assert');
const wdio = require('webdriverio');

let client;

// const url = 'https://learn.visualregressiontesting.com/';
const url = 'https://learn.visualregressiontesting.com/broke.html';

describe('my website should always look the same',function() {
    beforeEach('init webdrivercss', () => {
        client = wdio.remote({
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [
                        '--headless', 
                        '--disable-gpu',
                        'window-size=1920,1080'
                    ]
                }        
            }
        }).init();
        
        require('webdrivercss').init(client, {
            // example options
            screenshotRoot: 'screenshots/page1',
            failedComparisonsRoot: 'screenshots/page1/diffs',
            // misMatchTolerance: 0.05,
            // screenWidth: [320,480,640,1024]
        });
    })

    it('homepage should look the same', async (done) => {
        await client.url(url)
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
            .end()            
            .call(done);

        // test diff folder
    });
})    