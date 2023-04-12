import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user is on application form',()=>{
    cy.visit('https://demoqa.com/automation-practice-form')
})

When('user provide valid firstname and lastname in TEXTBOX',()=>{
    cy.get('#firstName').type('Virat')
    cy.get('#lastName').type('Kohli')
})

Then('user enter email id in TEXTBOX',()=>{
    cy.get('#userEmail').type('viratkohli123@gmail.com')
})

Then('user select the male gender from RADIO-BUTTON',()=>{
    cy.get('input[name="gender"]').check('Male',{force:true})
})

Then('user enter the mobile number in TEXTBOX',()=>{
    cy.get('input#userNumber').type('9090909090')
})

Then('user enter date of birth in TEXTBOX',()=>{
    // cy.get('input#dateOfBirthInput').clear().type('07 Mar 1998')
    // // cy.wait(2000)
    cy.get('input#dateOfBirthInput').type('07 Mar 1998')
    cy.get('#dateOfBirth-label').click()
})

Then('user enter subjects in TEXTBOX',()=>{
    cy.get('div#subjectsContainer').type('Maths')   
})

Then('user click on hobbies from CHECKBOXES',()=>{
    cy.get('[type="checkbox"]').check('1',{force:true})
})

Then('user upload picture',()=>{
    
})

Then('user enter current address in TEXTBOX',()=>{
    cy.get('#currentAddress').type('Mannat')
})

Then('user select state and city from DROPDOWN',()=>{
    // cy.get('div#state').type('Rajasthan',{force:true})
    cy.get('div#state').click()
    cy.get('input#react-select-3-input').type('Haryana,{Enter}')
    

})