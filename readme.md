# Visual Regression Test with WebDriverIO & WebDriverCSS

This will capture images as a baseline for the first run, and compare with the images from the next run.

## Prerequisites

Install packages

```sh
npm install
```

[WebDriverCSS](https://github.com/visualregressiontesting/webdrivercss) requires [GraphicsMagick](http://www.graphicsmagick.org/) for image processing, so remember to install it to your local machine before running any tests.

## Getting Started

You need to run chromedrive instance first

```sh
npm run serve
```

Then run your test

```sh
node path-to-your-file.js
```

## Reference

[WebDriverIO API](http://webdriver.io/api.html)
[Get Started with Visual Regression Testing and WebdriverIO](https://leanpub.com/visual-regression-testing-and-webdriverio-guide)