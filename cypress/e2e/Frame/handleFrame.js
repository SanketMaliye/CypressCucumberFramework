import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

Given('I am on Visiting Page.', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})

When('I switch to the iframe By Using Plugin.', () => {


    const frame1 = cy.get('#courses-iframe')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        .xpath('(//a[text()="Mentorship"])[1]')
        .should('have.text', 'Mentorship').click()

    frame1.xpath('(//a[text()="Job Support"])[1]').click()

})  