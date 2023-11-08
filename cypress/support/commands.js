const SIDENANAV = '[data-test="sidenav"] > .MuiPaper-root > :nth-child(1)'
const LOGOUT_BUTTON = '[data-test="sidenav-signout"]'
const ERROR_MESSAGE_VALIDATION = '[data-test="signin-error"]'



Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.MuiButton-label').click()
    
})

Cypress.Commands.add('getBySel', function () {
    return cy.get(`${SIDENANAV}`)
    
})

Cypress.Commands.add('getLogoutSel', function () {
    return cy.get(`${LOGOUT_BUTTON}`)
    
})

Cypress.Commands.add('errorMessage', function () {
    return cy.get(`${ERROR_MESSAGE_VALIDATION}`)
    
})


