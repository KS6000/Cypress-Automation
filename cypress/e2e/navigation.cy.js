describe('Navigation Tests', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('should show commands menu item', () => {
    cy.get('.navbar-nav').contains('Commands').should('be.visible')
  })

  it('should open utilities page', () => {
    cy.get('.navbar-nav').contains('Utilities').click()
    cy.url().should('include', '/utilities')
  })

})