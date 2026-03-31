describe('Navigation Tests', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('should navigate to commands page', () => {
    cy.contains('Commands').click()
    cy.url().should('include', '/commands')
  })

  it('should open utilities page', () => {
    cy.contains('Utilities').click()
    cy.url().should('include', '/utilities')
  })

})