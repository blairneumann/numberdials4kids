import { NumberDials4KidsPage } from './app.po';
import { browser } from 'protractor';

describe('Number Dials 4 Kids App', () => {
  let page: NumberDials4KidsPage;

  beforeEach(() => {
    page = new NumberDials4KidsPage();
    page.navigateTo('/');
  });

  afterAll(() => {
    browser.pause();
  });

  it('should display the app name in a header', () => {
    expect(page.getElement('h2').getText()).toEqual('Number Dials 4 Kids');
  });

  describe('First Number Dial', () => {
    it('should default to 1');
    it('should tap-up to increment and tap-down to decrement');
    it('should swipe-up to increment and swipe-down to decrement');
    it('should decrement to 0 but not lower');
    it('should increment at least to 9');
  });

  describe('Second Number Dial', () => {
    it('should be added when the first is incremented past 9');
    it('should default to 1 with total number 10');
    it('should tap-up to increment and tap-down to decrement');
    it('should swipe-up to increment and swipe-down to decrement');
    it('should decrement to 1 but not lower');
    it('should increment at least to 9');
  });

  describe('Third Number Dial', () => {
    it('should be added when the second is incremented past 9 and the first is 9');
    it('should default to 1 with total number 100');
    it('should tap-up to increment and tap-down to decrement');
    it('should swipe-up to increment and swipe-down to decrement');
    it('should decrement to 1 but not lower');
    it('should increment at least to 9');
  });

});
