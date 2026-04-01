class NavigationPage {

  elements = {
    navbar: '.navbar-nav'
  }

  clickMenuItem(menuText) {
    cy.get(this.elements.navbar).contains(menuText).click()
  }

  verifyMenuItemVisible(menuText) {
    cy.get(this.elements.navbar).contains(menuText).should('be.visible')
  }

  verifyUrlIncludes(path) {
    cy.url().should('include', path)
  }
}

export default new NavigationPage()
                            





