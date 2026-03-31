describe('Homepage Tests', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('should load homepage', () => {
    cy.contains('type').should('be.visible')
  })

  it('should click a link', () => {
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })

})