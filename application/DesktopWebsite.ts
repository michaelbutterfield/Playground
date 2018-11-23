import { GoogleSearchPage } from './pages/GoogleSearchPage'
import { PDHomePage } from './pages/PDHomePage';
import { GoogleSearchedPage } from './pages/GoogleSearchedPage';

export
{
    GoogleSearchPage,
    PDHomePage
};

export class DesktopWebsite
{
    public googlesearchpage: GoogleSearchPage;
    public googlesearchedpage: GoogleSearchedPage;
    public pdhomepage: PDHomePage;

    constructor()
    {
        this.googlesearchpage = new GoogleSearchPage();
        this.googlesearchedpage = new GoogleSearchedPage();
        this.pdhomepage = new PDHomePage();
    }
}