import { By } from "protractor";
import { TextInput } from "../../element/elements/textinput";
import { Button } from "../../element/elements/button";
import { Page } from "../../element/page/page";

export class PDHomePage extends Page
{
    public searchButton: Button;
    public searchTextBox: TextInput;

    constructor()
    {
        super("Psychological Dictionary Home Page");
        this.buildPage();
        
    }

    private async buildPage()
    {
        this.searchButton = new Button(By.xpath("//button[@class='btn btn-secondary']"), "Psych Dictionary Search Button", this.name);
        this.searchTextBox = new TextInput(By.id("typeahead-http"), "Psych Dictionary Search Box", this.name);
    }
}