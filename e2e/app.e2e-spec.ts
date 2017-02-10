import { NgTinymcePage } from './app.po';

describe('ng-tinymce App', function() {
  let page: NgTinymcePage;

  beforeEach(() => {
    page = new NgTinymcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
