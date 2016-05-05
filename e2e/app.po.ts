export class MyWayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-way-app h1')).getText();
  }
}
