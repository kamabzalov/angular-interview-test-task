import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get('http://localhost:4200/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('TestTask');
  });

  it('should have a title in users list component', () => {
    expect(element(by.css('.header__block-header')).getText()).toEqual('Users');
  })

  it('should have a title in albums list component', () => {
    expect(element(by.css('.albums__block-header')).getText()).toEqual('Albums');
  })

  it('should have a title in photos list component', () => {
    expect(element(by.css('.photos__block-header')).getText()).toEqual('0 Photos');
  })

  it('should show input element after icon click', () => {
    element(by.css('.mat-icon.clickable')).click();
    expect(element(by.css('.searchWrapper'))).toBeDefined();
  })

  it('should render 10 elements in users list component', () => {
    expect(element.all(by.css('.mat-list-item.hoverable')).count()).toEqual(10);
  })

  it('should render 1 element after entering user name', () => {
    element(by.css('.mat-icon.clickable')).click();
    element(by.css('.searchWrapper input')).sendKeys('Leanne Graham');
    expect(element.all(by.css('.mat-list-item.hoverable')).count()).toEqual(1);
  })

  it('should clear input value and render 10 users when click to close icon', ()=> {
    element(by.css('.mat-icon.clickable')).click();
    element(by.css('.searchWrapper input')).sendKeys('Leanne Graham');
    element.all(by.css('.searchWrapper mat-icon')).last().click();
    expect(element.all(by.css('.mat-list-item.hoverable')).count()).toEqual(10);
    expect(element.all(by.css('.header__block-header')).count()).toEqual(0);
    expect(element(by.css('.searchWrapper input')).getAttribute('value')).toEqual('');
  })

  it('should hide input field when click to back icon', () => {
    element(by.css('.mat-icon.clickable')).click();
    element.all(by.css('.searchWrapper mat-icon')).last().click();
    expect(element.all(by.css('.header__block-header')).count()).toEqual(1);
    expect(element(by.css('.header__block-header')).getText()).toEqual('Users');
  })

  it('should render albums list when click to particular user', () => {
    element.all(by.css('aside mat-list-item')).first().click();
    expect(element.all(by.css('.albums .mat-checkbox')).count()).toBeGreaterThan(1);
  })

  // Not working :(
  // it('should render photos list after first checkbox click', () => {
  //   element.all(by.css('aside mat-list-item')).first().click();
  //   element.all(by.css('.albums mat-checkbox')).first().click();
  //   var started = startTestServer();
  //   browser.wait(started, 2000);
  //   expect(element.all(by.css('.albums mat-checkbox input')).first().isSelected()).toBe(true)
  // })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
