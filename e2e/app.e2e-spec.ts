import { FormsWorkshopPage } from './app.po';

describe('forms-workshop App', function() {
  let page: FormsWorkshopPage;

  beforeEach(() => {
    page = new FormsWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('swat works!');
  });
});
