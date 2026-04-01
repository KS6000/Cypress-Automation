import NavigationPage from '../pages/NavigationPage'

describe('Navigation Tests', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('should show commands menu item', () => {
    NavigationPage.verifyMenuItemVisible('Commands')
  })

  it('should open utilities page', () => {
    NavigationPage.clickMenuItem('Utilities')
    NavigationPage.verifyUrlIncludes('/utilities')
  })

})