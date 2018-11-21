const wdio = require('webdriverio');

const browser = wdio.remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
}).init();

require('webdrivercss').init(browser);

const url = 'http://outdatedbrowser.com';

const menuIcon = {
    name: 'Menu icon',
    elem: '.menu a'
}

const menu = {
    name: 'Menu',
    elem: '.main_menu'
}

browser.url(url)
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
    .end();