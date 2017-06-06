import { BunkerCodeTestPage } from './app.po';

describe('bunker-code-test App', function() {
  let page: BunkerCodeTestPage;

  beforeEach(() => {
    page = new BunkerCodeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
