Feature: PaymentSubmissions Error Scenarios

    #1
    Scenario Outline: When a member opts for Payment Submission, the scenario will validate that the user should not be able to retrieve payment submission details if invalid Authentication details are provided
        Given I set the invalid Authentication details
        When I make a GET request to Payment Submission <Path>
        Then I should get a response error status code as <StatusCode> <StatusMessage>
    Examples:
        | Path                         | StatusCode | StatusMessage |
        | "payment-submissions/ABC111" | 401        | "Unauthorized"|

    #2
    Scenario Outline: When a member opts for Payment Submission, the scenario will validate that the user should not be able to retrieve payment submission details if no payment-submission-id is provided
        Given I set the Authentication details
        When I make a GET request to Payment Submission <Path>
        Then I should get a response error status code as <StatusCode> <StatusMessage>
    Examples:
        | Path                   | StatusCode | StatusMessage           |
        | "payment-submissions/" | 500        | "Internal Server Error" |

    #3
    Scenario Outline: When a member opts for Payment Submission, the scenario will validate that the user should not be able to retrieve payment submission details if invalid payment-submission-id is provided
        Given I set the Authentication details
        When I make a GET request to Payment Submission <Path>
        Then I should get a response error status code as <StatusCode> <StatusMessage>
    Examples:
        | Path         | StatusCode | StatusMessage |
        | "pay/ABC111" | 400        | "Bad Request" |