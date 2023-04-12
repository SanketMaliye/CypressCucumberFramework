import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user is on login page',()=>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

// When('user provide {string} and {string}',(username,password)=>{
//     cy.get('input#username').type(username)
//     cy.get('input#password').type(password)
// })

When('user provide login details as follows',(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('input#username').type(element.Username)
        cy.get('input#password').type(element.Password)
    });
})

Then('user should be logged in successfully.',()=>{
    cy.get('button#submit').click()
})

Then('user verified the {string}',(title)=>{
    cy.title().should('eq',title)
})