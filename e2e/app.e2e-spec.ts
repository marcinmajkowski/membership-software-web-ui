import { MembershipSoftwareWebUiPage } from './app.po';

describe('membership-software-web-ui App', () => {
  let page: MembershipSoftwareWebUiPage;

  beforeEach(() => {
    page = new MembershipSoftwareWebUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
