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