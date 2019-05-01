# Visual Regression Test with WebDriverIO & WebDriverCSS

This will capture images as a baseline for the first run, and compare with the images from the next run.

This project is based on WebdriverIO, WebdriverCSS with Mocha Testing Framework.

[WebDriverCSS](https://github.com/visualregressiontesting/webdrivercss) requires [GraphicsMagick](http://www.graphicsmagick.org/) for image processing, so remember to install it to your local machine before running any tests.

## Prerequisites

Install packages

```sh
npm install
```

## Getting Started

Run this command to run your test

```sh
npm test
```

The first time you run, it will create base images. The next time you run, it will create regression images. If there are any differents. It will be saved under screenshots/--/**diffs** folder.

## Reference

[WebDriverIO API](http://webdriver.io/api.html)
[Get Started with Visual Regression Testing and WebdriverIO](https://leanpub.com/visual-regression-testing-and-webdriverio-guide)