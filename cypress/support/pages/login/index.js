const SIDENANAV = '[data-test="sidenav"] > .MuiPaper-root > :nth-child(1)'
const LOGOUT_BUTTON = '[data-test="sidenav-signout"]'
const ERROR_MESSAGE_VALIDATION = '[data-test="signin-error"]'
const LOGIN_FORM = '.MuiContainer-maxWidthXs'


Cypress.Commands.add('loginPage.fillFormAndSubmit', (
    username = 'Katharina_Bernier',
    password = 's3cret'
    
    ) => {
    
    cy.get('#username').type(username)
    cy.get('#password').type(password, { log: false })
    cy.get('.MuiButton-label').click()
    
})

Cypress.Commands.add('dashboardPage.SideNavigatioElement', function () {
    return cy.get(`${SIDENANAV}`)
    
})

Cypress.Commands.add('dashboardPage.logoutButton', function () {
    return cy.get(`${LOGOUT_BUTTON}`)
    
})

Cypress.Commands.add('errorMessage', function () {
    return cy.get(`${ERROR_MESSAGE_VALIDATION}`)
    
})

Cypress.Commands.add('loginPage.form', function () {
    return cy.get(`${LOGIN_FORM}`)
    
})

Cypress.Commands.add('loginPage.userEnterWrongCredentials', (
    wrong_username = 'user',
    wrong_password = 'incorrect_password'
    
    ) => {
    
    cy.get('#username').type(wrong_username)
    cy.get('#password').type(wrong_password, { log: false })
    cy.get('.MuiButton-label').click()
        
})

Cypress.Commands.add('loginPage.userEnterValidUsernameIncorrectPassword', (
    wrong_username = 'Katharina_Bernier',
    wrong_password = 'incorrect_password'
    
    ) => {
    
    cy.get('#username').type(wrong_username)
    cy.get('#password').type(wrong_password, { log: false })
    cy.get('.MuiButton-label').click()
        
})

Cypress.Commands.add('loginPage.userEnterInvalidUsernameCorrectPassword', (
    wrong_username = 'incorrect_user',
    wrong_password = 's3cret'
    
    ) => {
    
    cy.get('#username').type(wrong_username)
    cy.get('#password').type(wrong_password, { log: false })
    cy.get('.MuiButton-label').click()
        
})

Cypress.Commands.add('loginPage.userLeavesUsername&PasswordBlank', () => {
    cy.get('.MuiButton-label').click() 
    
})


Cypress.Commands.add('loginPage.userGetErrorMessage', () => {
    
    cy.get('[data-test="signin-error"]')
      .should('be.visible')
      .and("contain", "Username or password is invalid")
        
})

Cypress.Commands.add('loginPage.errorMessageUserIsRequired', () => {
    
    cy.get('#username-helper-text')
      .should('be.visible')
      .and("contain", "Username is required")
        
})
  