import { DemoWriterPage } from './app.po';

describe('demo-writer App', function() {
  let page: DemoWriterPage;

  beforeEach(() => {
    page = new DemoWriterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
