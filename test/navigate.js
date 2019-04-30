const assert = require('assert');
const wdio = require('webdriverio');

let client;

const url = 'http://outdatedbrowser.com';
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
        
        require('webdrivercss').init(client);
    })

    it('Test navigation', async (done) => {
        await client.url(url)
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
    });
})    