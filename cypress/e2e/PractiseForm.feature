Feature: Application Form Elements Inspection.

Scenario: Test The Application Form Elements
	Given user is on application form
	When user provide valid firstname and lastname in TEXTBOX
	Then user enter email id in TEXTBOX
	Then user select the male gender from RADIO-BUTTON
	Then user enter the mobile number in TEXTBOX
	Then user enter date of birth in TEXTBOX
	Then user enter subjects in TEXTBOX
	Then user click on hobbies from CHECKBOXES
	Then user upload picture
	Then user enter current address in TEXTBOX
	Then user select state and city from DROPDOWN
	
