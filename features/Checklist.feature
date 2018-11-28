@ShoppingChecklist
Feature: Checklist
    # Have discussions around:
    # Is it better to test APIs without mentioning a 3rd person - i.e. should we have used when the board owner unchecks an item (lends more to GUI tests)
    # Risk - is it necesarry to perform for each item
    # Would it have been sufficient to perform for a check / uncheck in 1 scenario
    # discuss boundaey value techniques in a single scenario

    Background: Board setup
        Given a Trello board called 'Shopping List'
        And there is a card called 'Supermarket'
        And the card has a checklist with the items
            | Washing powder   |
            | Crisps multipack |
            | Fruit            |

    @MarkItemAsDone
    Scenario Outline:  Mark an item as done
        # is the risk enough to warrant each item?
        Given the <item> state is currently incomplete
        When the <item> state is changed to complete
        And an update checklist request is made
        Then the <item> state should be updated to complete
        Examples:
            | item             |
            | Crisps multipack |
            | Fruit            |
            | Washing powder   |

    @UncheckAnItem
    Scenario Outline: Uncheck an item
        # is the risk enough to warrant each item?
        Given the <item> state is currently complete
        When the item state is changed to incomplete
        And an update checklist request is made
        Then the <item> state should be updated to incomplete
        Examples:
            | item             |
            | Crisps multipack |
            | Fruit            |
            | Washig powder    |

    @ChangeStateOfItem
    Scenario Outline: Change the state of an item
        # is it better to consoldate in one scenrio - think about the results for the end user.
        Given an item's state is currently <state1>
        When the item's state is changed to <state2>
        And an update checklist request is made
        Then the item's state should be updated to <state2>
        Examples:
            | state1     | state2     |
            | complete   | incomplete |
            | incomplete | complete   |


    @BoundaryValueCheck
    Scenario Outline:  Length Checklist description
        # apply boundary value on the length
        Given an existing checklist
        When the checklist description is modified to <description>
        And an update checklist request is made
        Then the response status code is <response>
        And the response body contains the <message>
        Examples:
            | description              | response | message                                  |
            | One Char Less Than Max   | 200      | Successful                               |
            | Exact Max Length Allowed | 200      | Warning: description exceeds max allowed |
            # Or is it?
            | Exact Max Length Allowed | 500 | Internal server error |

    @AddItemToChecklist
    Scenario: Add an item to an empty checklist
        # discuss whether we should have scenarios for a checklist that already has items
        Given an empty checklist
        When the item 'Coffee' is added to the checklist
        And an update checklist request is made
        Then the checklist should contain the item 'Coffee'

    @AddMultipleItemsToChecklist
    Scenario:  Add multiple items to an empty checklist
        # at what number of items should we stop?  How many scenarios would that lead to?
        Given an empty checklist
        When the item 'Coffee' is added to the checklist
        And the item 'Tea' is added to the checklist
        And an update checklist request is made
        Then the checklist should contain the item 'Coffee'
        And the checklist should contain the item 'Tea'

    @AddVariousNumberOfItemsToChecklist
    Scenario Outline: Add various number of items to list.
        # Find out from Trello what's the max number of   - here we're assuming it's 20 and applying boundary value technique
        # Find out what happens when too many are submitted - is there an error message or does it accept the first 20
        # Note - it doesn't matter what the items are called - that's irrelevent to this test
        Given an empty checklist
        When <number> items are added to the checklist
        And an update checklist request is made
        Then the checklist should contain <expected> items
        Examples:
            | number | expected |
            | 0      | 0        |
            | 1      | 1        |
            | 20     | 20       |
            | 21     | 20       |

    @RemoveVariousNumberOfItemsToChecklist
    Scenario Outline: Remove various number of items from list
        # Again assuming 20 is max - find out.  Apply boundary value technique
        Given there are 20 items on a checklist
        When <number> items are removed from the checklist
        And an update checklist request is made
        Then the checklist should contain <expected> items
        Examples:
            | number | expected |
            | 0      | 20       |
            | 1      | 19       |
            | 19     | 1        |
            | 20     | 0        |






