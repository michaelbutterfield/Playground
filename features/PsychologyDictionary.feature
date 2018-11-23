@PDHomePage
Feature: Psychology Dictionary

@PsychologyScenario
Scenario: Search that stuff
 Given I am on the home page
 When I search "intercoastal" in dictionary
 Then the input search results will be displayed dictionary