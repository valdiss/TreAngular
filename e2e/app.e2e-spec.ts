import { TrangularPage } from './app.po';

describe('trangular App', () => {
  let page: TrangularPage;

  beforeEach(() => {
    page = new TrangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
