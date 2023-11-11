/// <reference types="cypress" />

describe('User Sign-up and Login', () => {

  beforeEach(() => {
   
    // Given the user is on the login page
    cy.visit('/signin/')
  
  })


  it("should allow a visitor to sign-up, login, and logout", function () {
   
    // Then the user should be on sign in page
    cy.location("pathname").should("equal", "/signin")

    // When I enter my login credentials
    cy['loginPage.fillFormAndSubmit']()
    
    // Then I should be logged in and redirected to the dashboard
    cy['dashboardPage.SideNavigatioElement']().should('be.visible')

    // When I click on the logout button
    cy['dashboardPage.logoutButton']().click()
    
    // And the user should be redirected to the login page
    cy['loginPage.form']().should('be.visible')
    
  });

  it("User enters invalid credentials ", function () {

    // When the user enters an invalid username "user" and password "incorrect_password" and clicks Login
    cy['loginPage.userEnterWrongCredentials']()
    
    // And the error message should contain the text "Invalid username or password"
    cy['loginPage.userGetErrorMessage']()
     
  });

  it("User enters a valid username but incorrect password", function () {
    
    // When the user enters an valid username "Katharina_Bernier" and password "incorrect_password" and clicks Login
    cy['loginPage.userEnterValidUsernameIncorrectPassword']()
    
    // And the error message should contain the text "Invalid username or password"
    cy['loginPage.userGetErrorMessage']()
   
     
  });

  it("User enters a invalid username but correct password", function () {
    
    // When the user enters an valid username "incorrect_user" and password "s3cret" and clicks Login
    cy['loginPage.userEnterInvalidUsernameCorrectPassword']()
    
    // And the error message should contain the text "Invalid username or password"
    cy['loginPage.userGetErrorMessage']()
   
     
  });

  it("User leaves username and password fields blank and clicks Login", function () {
    
    // When the user leaves the username and password fields blank and clicks Login
    cy['loginPage.userLeavesUsername&PasswordBlank']()
    
    // And the error message should contain the text "Invalid username or password"
    cy['loginPage.errorMessageUserIsRequired']()
   
     
  });
  
})
