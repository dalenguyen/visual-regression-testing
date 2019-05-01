const assert = require('assert');
const wdio = require('webdriverio');
var getDiffFiles = require('../utils/get_diff_files');

let client;

const options = {
    url: 'http://outdatedbrowser.com',    
    screenshotRoot: 'screenshots/page2',
    failedComparisonsRoot: 'screenshots/page2/diffs'
}

const menuIcon = {
    name: 'Menu icon',
    elem: '.menu a'
};

const menu = {
    name: 'Menu',
    elem: '.main_menu'
};

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

    it('Test navigation', async (done) => {
        await client.url(options.url)
                // take pictures of icon & page
                .webdrivercss('Hamburger Icon', [menuIcon])
                .click(menuIcon.elem)
                .pause(1000) // wait for the animation
                // take picture of menu & page
                .webdrivercss('Main Menu - Open', menu)
                .click('=THE PROJECT')
                .pause(1000)
                .webdrivercss('Main Menu Icon - Projects', menuIcon)
                .getUrl().then(url => {
                    console.log('Page url is:', url);        
                })
                .end()
                .call(done);

        // test diff folder
        const files = await getDiffFiles(options.failedComparisonsRoot);        
        // console.table({files})
        assert.equal(files.length, 0, `There are changes on the site! Please check in ${options.failedComparisonsRoot} folder.`)
    });
})    