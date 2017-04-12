import { SuprematismToggleSwitchPage } from './app.po';

describe('SuprematismToggleSwitch App', function() {
  let page: SuprematismToggleSwitchPage;

  beforeEach(() => {
    page = new SuprematismToggleSwitchPage();
  });

  it('should display page header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Trigger');
  });
});
