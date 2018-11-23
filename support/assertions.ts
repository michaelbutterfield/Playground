var assertion = require('hamjest');

export class Assertions
{
    public static async assertThat(actual, matcher, stepDescription: String)
    {
        console.log(stepDescription);

        assertion.assertThat(actual, matcher)
    }
}