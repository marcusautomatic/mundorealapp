const SIDENANAV = '[data-test="sidenav"] > .MuiPaper-root > :nth-child(1)'


Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.MuiButton-label').click()
    
})

Cypress.Commands.add('getBySel', function () {
    return cy.get(`${SIDENANAV}`)
    
})

Cypress.Commands.add('userLogsOut', function () {
    return cy.get('[data-test="sidenav-signout"]')
    
})


