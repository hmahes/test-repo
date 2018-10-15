Feature: PaymentSubmissions Success Scenarios

    #1
    Scenario Outline: When a member opts for Payment Submission, he should be able to retrieve the payment submission details
        Given I set the Authentication details
        When I make a GET request to Payment Submission <Path>
        Then I should get a response status code as <StatusCode> <StatusMessage> 
        And I should get a response field "PaymentSubmissionId" containing the value <PaymentSubmissionId>
        And I should get a response field "PaymentId" containing the value <UUID>
        And I should get a response field "Status" containing the value <Status>
        And I should get a response field "Self" containing the value <Self>

    Examples:
        | Path                         | StatusCode | StatusMessage | PaymentSubmissionId | UUID   | Status                        | Self                                            |
        | "payment-submissions/ABC111" | 200        | "OK"          | "ABC111"            | "true" | "AcceptedSettlementCompleted" | "/open-banking/v1.1/payment-submissions/ABC111" |

    #2
    Scenario Outline: When a member opts for Payment Submission, he should be able to retrieve the payment submission details and the interaction Id
        Given I set the Authentication details and the Interaction Id
        When I make a GET request to Payment Submission <Path>
        Then I should get a response status code as <StatusCode> <StatusMessage>
        And I should get a response interaction id as <InteractionId>
    Examples:
        | Path                         | StatusCode | StatusMessage |InteractionId |
        | "payment-submissions/ABC123" | 200        | "OK"          |"bbbUB4fPI"   |
