import { ThomasStarterPage } from './app.po';

describe('thomas-starter App', () => {
  let page: ThomasStarterPage;

  beforeEach(() => {
    page = new ThomasStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to thomas!!');
  });
});
