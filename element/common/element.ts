import { WebElement, By } from 'selenium-webdriver';
import { browser, protractor } from 'protractor';
var assertion = require('hamjest');

export class Element
{
  //constructor(protected element: WebElementPromise, public selector: string) { }
  protected locator: By;
  protected name: String;
  protected pageName: String;
  protected frame: String;

  constructor(passedLocator: By, passedName: String, passedPageName: String)
  {
      this.makeElement(passedLocator, passedName, passedPageName, "");
  }

  private async makeElement(passedLocator, passedName, passedPageName, passedFrameName)
  {
    this.locator = passedLocator;
    this.name = passedName;
    this.pageName = passedPageName;
    this.frame = passedFrameName;
  }

  public AssertElementIsDisplayed(): void
  {
    let element;

    try
    {
      element = this.getElement(false, true);
    }
    catch (Error)
    {

    }
    finally
    {
      //assertion.assertThat(element, assertion.not(null))
      assertion.assertThat(element, assertion.not(null))
    }
  }
  
  public AssertElementIsEnabled(): void
  {
    let element;

    try
    {
      element = this.getElement(true, true);
    }
    catch (Error)
    {
      //TODO: exception handler
      //need to implement exception handler
    }
    finally
    {
      //assertion.assertThat(element, assertion.not(null))
      assertion.assertThat(element, assertion.not(null))
    }
  }

  public AssertElementIsNotDisplayed(): void
  {
    let element;

    try
    {
      element = this.getElement(false, true);
    }
    catch (Error)
    {

    }
    finally
    {
      //assertion.assertThat(element, assertion.not(null))
      assertion.assertThat(element, assertion.is(null))
    }
  }

  public async click()
  {
    let clickElement = this.getElement(true, false);
    try
    {
      return await clickElement.click();
      //return await this.element.click();
    }
    catch (clickErr)
    {
      try
      {
        await this.getElement(false, false).getDriver().executeScript('arguments[0].click();', this.getElement(true, false));
      }
      catch (jsErr)
      {
        throw clickErr;
      }
    }
  }

  public getAttribute(attributeName: string)
  {
    return this.getElement(false, true).getAttribute(attributeName);
  }

  public getElement(waitUntilClickable: Boolean, waitUntilVisible: Boolean): WebElement
  {
    if (waitUntilClickable)
    {
      this.waitUntilElementIsClickable();
    }
    if (waitUntilVisible)
    {
      this.waitUntilElementIsVisible();
    }

    return browser.driver.findElement(this.locator);
  }

  public async getText()
  {
    return await this.getElement(false, true).getText();
  }

  public async isDisabled()
  {
    try
    {
      return await this.getElement(false, false).getAttribute('disabled') === 'disabled';
      //return await this.element.getAttribute('disabled') === 'disabled';
    }
    catch (ex)
    {
      return false;
    }
  }

  public async isDisplayed()
  {
    try
    {
      return await this.getElement(false, true).isDisplayed();
    }
    catch (ex)
    {
      return false;
    }
  }

  public async waitUntilElementIsClickable()
  {
    await browser.driver.wait(protractor.until.elementIsEnabled(browser.driver.findElement(this.locator)));
  }

  public async waitUntilElementIsVisible()
  {
    await browser.driver.wait(protractor.until.elementIsVisible(browser.driver.findElement(this.locator)));
  }
}