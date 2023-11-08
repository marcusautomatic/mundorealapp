/// <reference types="cypress" />
import { isMobile } from "../../support/utils";

describe('User Sign-up and Login', () => {

  beforeEach(() => {
   
    cy.visit('/signin/')
  
  })


  it("should allow a visitor to sign-up, login, and logout", function () {
   
    const userInfo = {
      firstName: "Bob",
      lastName: "Ross",
      username: "Katharina_Bernier",
      password: "s3cret",
    };

    // Then the user should be on sign in page
    cy.location("pathname").should("equal", "/signin")
    // When I enter my login credentials
    cy.login(userInfo.username, userInfo.password)

    // Then I should be logged in and redirected to the dashboard
    cy.getBySel().should('exist')

    // When I click on the logout button
    if (isMobile()) {
      cy.getBySel.click()
    }
    cy.getLogoutSel().should('contain', 'Logout').click()
    cy.location("pathname").should("eq", "/signin");

    // And the user should be redirected to the login page
    cy.get('.makeStyles-form-56').should('be.visible')

  });

  it("should display login errors", function () {
    // Given I am on the login page
    cy.visit("/");
    
    // When I enter my login credentials
    cy.get("#username").type("user")
    cy.get("#password").type("abcd").should("be.visible")

    // When I click on the login button
    cy.get('.MuiButton-label').click()

    // And the user should be redirected to the login page
    cy.errorMessage()
      .should('be.visible')
      .and("contain", "Username or password is invalid")
     
  });

  it("Displaying login errors when a user attempts to log in without providing credentials", function () {
    
    // Given I am on the login page
    cy.visit("/");

    //  When the user tries to log in without entering their username or password
    cy.get('.MuiButton-label').click()

    // Then an error message should be displayed indicating that both username and password are required
    cy.get('#username-helper-text')
      .should("be.visible")
      .and("contain", "Username is required")  
     
  });
  
})
