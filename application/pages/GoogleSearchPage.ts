import { By } from "protractor";
import { TextInput } from "../../element/elements/textinput";
import { Button } from "../../element/elements/button";
import { Page } from "../../element/page/page";

export class GoogleSearchPage extends Page
{
    public searchTextBox: TextInput;
    public searchButton: Button;

    constructor()
    {
        super("Search Page");
        this.buildPage();
        
    }

    private async buildPage()
    {
        this.searchTextBox = new TextInput(By.xpath("//input[@class='gLFyf gsfi']"), "Google Search Text Box", this.name);
        this.searchButton = new Button(By.xpath("//div[@class='FPdoLc VlcLAe']//input[@value='Google Search'][@type='submit']"), "Google Search Button", this.name);
    }
}