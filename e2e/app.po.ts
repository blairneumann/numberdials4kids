import { browser, by, element } from 'protractor';

export class NumberDials4KidsPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
