const fs = require('fs');

export class ApiHelper
{
    private static ApiKey: String;
    private static ApiToken: String;

    public static GetApiKey(): String
    {
        return this.ApiKey;
    }

    public static GetApiToken(): String
    {
        return this.ApiToken;
    }

    public static ReadApiKeyToken(): void
    {
        let keytoken: String = fs.readFileSync('C:/Users/michael.butterfield/Desktop/trello.txt', 'utf8');

        let dataValue: String[] = keytoken.split('\t');

        this.ApiKey = dataValue[0];
        this.ApiToken = dataValue[1];
    }
}