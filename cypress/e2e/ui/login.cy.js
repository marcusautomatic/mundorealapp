/// <reference types="cypress" />


describe('User Sign-up and Login', () => {
  beforeEach(() => {
    
    cy.visit('/signin/')
  
  })

  it('should allow a visitor to sign-up, login, and logout', () => {
    cy.location("pathname").should("equal", "/signin");
    
  })

  it("should redirect to the home page after login", function () {
    const userInfo = {
      firstName: "Bob",
      lastName: "Ross",
      username: "Katharina_Bernier",
      password: "s3cret",
    };
    
    cy.login(userInfo.username, userInfo.password)
    cy.getBySel().should('exist')

    // logout
    cy.userLogsOut().should('contain', 'Logout').click()
    cy.location("pathname").should("eq", "/signin");
    cy.get('.makeStyles-form-56').should('be.visible')

    
  });
  
})
