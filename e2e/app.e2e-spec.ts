import { Angular2JokeAppPage } from './app.po';

describe('angular2-joke-app App', () => {
  let page: Angular2JokeAppPage;

  beforeEach(() => {
    page = new Angular2JokeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
