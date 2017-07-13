import { Ng2FuzhutechItsmPage } from './app.po';

describe('ng2-fuzhutech-itsm App', () => {
  let page: Ng2FuzhutechItsmPage;

  beforeEach(() => {
    page = new Ng2FuzhutechItsmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
