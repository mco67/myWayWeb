import { MyWayPage } from './app.po';

describe('my-way App', function() {
  let page: MyWayPage;

  beforeEach(() => {
    page = new MyWayPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('my-way works!');
  });
});
