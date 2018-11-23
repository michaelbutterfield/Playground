import { Element } from "../common/element";
import { By } from "selenium-webdriver";

export class TextInput extends Element
{
  constructor(passedLocator: By, passedName: String, passedPageName: String)
  {
    super(passedLocator, passedName, passedPageName);
  }

  public inputText(text: string)
  {
    try
    {
      return this.getElement(true, true).sendKeys(text);
      //return this.element.sendKeys(text);
    }
    catch(Error)
    {
      console.log(Error);
    }
  }
}