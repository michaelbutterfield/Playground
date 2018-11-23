@GoogleFeature
Feature: Google Angular

Background: Go to Google search page
    Given I go to the google search page

@GoogleScenario
Scenario: Google "Angular"
    Given I am on the Google website
    When I search "Angular"
    Then the input search results will be displayed