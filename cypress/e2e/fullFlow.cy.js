import LoginPage from '../pages/LoginPage'

describe('Full Flow Test', () => {
  it('should perform user journey', () => {
    LoginPage.visit()
    LoginPage.login('tomsmith', 'SuperSecretPassword!')
    LoginPage.verifySuccessfulLogin()

    cy.origin('https://example.cypress.io', () => {
      cy.visit('/')

      cy.get('.navbar-nav').contains('Utilities').click()
      cy.url().should('include', '/utilities')
    })
  })
})       
