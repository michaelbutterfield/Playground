import { Element } from "../common/element";
import { WebElementPromise, By } from "selenium-webdriver";

export class Button extends Element
{
  constructor(passedLocator: By, passedName: String, passedPageName: String)
  {
    super(passedLocator, passedName, passedPageName);
  }
}