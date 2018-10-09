Feature: Accessing mywipro portal 

Scenario: Validate error message in mywipro site
	Given I launch mywipro url 
	When I select Wipro Limited option
	When I verify title of the page
	When I enter invalid login details 
	Then I should see the error message