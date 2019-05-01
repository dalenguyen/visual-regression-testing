const assert = require('assert');
const wdio = require('webdriverio');
var getDiffFiles = require('../utils/get_diff_files');

let client;

const options = {
    // url: 'https://learn.visualregressiontesting.com/',
    url: 'https://learn.visualregressiontesting.com/broke.html',
    screenshotRoot: 'screenshots/page1',
    failedComparisonsRoot: 'screenshots/page1/diffs'
}


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
            screenshotRoot: options.screenshotRoot,
            failedComparisonsRoot: options.failedComparisonsRoot,
            // misMatchTolerance: 0.05,
            // screenWidth: [320,480,640,1024]
        });
    })

    it('homepage should look the same', async (done) => {
        await client.url(options.url)
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
        const files = await getDiffFiles(options.failedComparisonsRoot);        
        // console.table({files})
        assert.equal(files.length, 0, `There are changes on the site! Please check in ${options.failedComparisonsRoot} folder.`)
    });
})    