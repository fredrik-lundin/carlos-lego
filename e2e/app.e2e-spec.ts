import { CarlosLegoPage } from './app.po';

describe('carlos-lego App', () => {
  let page: CarlosLegoPage;

  beforeEach(() => {
    page = new CarlosLegoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
