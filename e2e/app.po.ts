import { browser, by, element } from 'protractor';

export class ThomasStarterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('thomas-root h1')).getText();
  }
}
