Feature: Payments Success Scenarios

    #1
    Scenario Outline: When a member opts for Payment Initiation, he should be able to retrieve the payment details
        Given I set the Authentication details
        When I make a GET request to Payment <Path>
        Then I should get a response status code as <StatusCode> <StatusMessage> 
        And it should have the field "PaymentId" containing the value <PaymentId>
        And it should have the field "Status" containing the value <Status>
        And it should have the field "InstructionIdentification" containing the value <InstructionIdentification>
        And it should have the field "EndToEndIdentification" containing the value <EndToEndIdentification>
        And it should have the field "Amount" containing the value <Amount>
        And it should have the field "Currency" containing the value <Currency>
        And it should have the field "SchemeName" containing the value <SchemeName>
        And it should have the field "Identification" containing the value <Identification>
        And it should have the field "Name" containing the value <Name>
        And it should have the field "Self" containing the value <Self>

    Examples:
        | Path                 | StatusCode | StatusMessage | PaymentId | Status                        | InstructionIdentification   | EndToEndIdentification   | Amount   | Currency   | SchemeName              | Identification   | Name    | Self                                 |
        | "payments/ABC123"    | 200        | "OK"          | "ABC123"  | "AcceptedTechnicalValidation" | "ACME412"                   | "FRESCO.21302.GFX.20"    | "140.70" | "GBP"      | "SortCodeAccountNumber" | "123422290"      | "Alice" | "/open-banking/v1.1/payments/ABC123" |

    #2
    Scenario Outline: When a member opts for Payment Initiation, he should be able to retrieve the payment details and the interaction Id
        Given I set the Authentication details and the Interaction Id
        When I make a GET request to Payment <Path>
        Then I should get a response status code as <StatusCode> <StatusMessage>
        And I should get a response interaction id as <InteractionId>
    Examples:
        | Path                 | StatusCode | StatusMessage |InteractionId |
        | "payments/XYZ456"    | 200        | "OK"          |"bbbUB4fPI"   |
