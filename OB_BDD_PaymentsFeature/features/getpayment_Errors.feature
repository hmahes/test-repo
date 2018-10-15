@PaymentsError
Feature: Payments Error Scenarios

    #1
    Scenario Outline: When a member opts for Payment Initiation, the scenario will validate that the user should not be able to retrieve payment details if invalid Authentication details are provided
        Given I set the invalid Authentication details
        When I make a GET request to Payment <Path>
        Then I should get a response error status code as <StatusCode> <StatusMessage>
    Examples:
        | Path                 | StatusCode | StatusMessage |
        | "payments/bbbUB4"    | 401        | "Unauthorized"|

    #2
    Scenario Outline: When a member opts for Payment Initiation, the scenario will validate that the user should not be able to retrieve payment details if no payment id is provided
        Given I set the Authentication details
        When I make a GET request to Payment <Path>
        Then I should get a response error status code as <StatusCode> <StatusMessage>
    Examples:
        | Path           | StatusCode | StatusMessage           |
        | "payments/"    | 500        | "Internal Server Error" |

    #3
    Scenario Outline: When a member opts for Payment Initiation, the scenario will validate that the user should not be able to retrieve payment details if invalid payment id is provided
        Given I set the Authentication details
        When I make a GET request to Payment <Path>
        Then I should get a response error status code as <StatusCode> <StatusMessage>
    Examples:
        | Path         | StatusCode | StatusMessage |
        | "pay/ABC111" | 400        | "Bad Request" |