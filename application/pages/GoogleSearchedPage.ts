import { By } from "protractor";
import { TextInput } from "../../element/elements/textinput";
import { Page } from "../../element/page/page";
import { Button } from "../../element/elements/button";

export class GoogleSearchedPage extends Page
{
    public searchTextBox: TextInput;
    public searchResult: Button;

    constructor()
    {
        super("Searched Page");
        this.buildPage();
        
    }

    private async buildPage()
    {
        this.searchResult = new Button(By.xpath("//a[@href='https://angular.io/guide/quickstart']"), "Google Search Result", this.name);
        this.searchTextBox = new TextInput(By.xpath("//input[@class='gLFyf gsfi'][@type='text']"), "Google Search Text Box", this.name);
    }
}