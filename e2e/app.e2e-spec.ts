import { HJPage } from './app.po';

describe('hj App', () => {
  let page: HJPage;

  beforeEach(() => {
    page = new HJPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
