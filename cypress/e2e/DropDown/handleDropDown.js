import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user is on practise page.', () => {
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.visit('http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
})

When('user click on Select dropdown',function(){
    cy.get('#menu1').click()
})

Then('user select JavaScript value',function(){
    cy.get('a[role="menuitem"]').each(function ($ele, index, list){
        if($ele.text() === 'JavaScript'){
            cy.wrap($ele).click()
        }
    })
})