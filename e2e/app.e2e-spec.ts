import { Numberdials4kidsPage } from './app.po';

describe('numberdials4kids App', () => {
  let page: Numberdials4kidsPage;

  beforeEach(() => {
    page = new Numberdials4kidsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
