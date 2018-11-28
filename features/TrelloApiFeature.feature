@API
Feature: Trello API

@TrelloCreateBoard
Scenario: Create a board
 Given I query Trello to create a new board
 Then the status response will be "200"

@TrelloDeleteBoard
Scenario: Delete a board
 Given I query Trello to delete the board
 Then the status response will be "200"

 @GetBoardId
 Scenario: Get Board Id
    Given I try and get the board Id
    Then I can display the board Id