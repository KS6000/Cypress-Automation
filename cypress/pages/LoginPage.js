class LoginPage {
  elements = {
    username: '#username',
    password: '#password',
    loginBtn: 'button[type="submit"]',
    successMessage: '#flash',
  }

  visit() {
    cy.visit('/login')
  }

  enterUsername(username) {
    cy.get(this.elements.username).type(username)
  }

  enterPassword(password) {
    cy.get(this.elements.password).type(password)
  }

  clickLogin() {
    cy.get(this.elements.loginBtn).click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }

  verifySuccessfulLogin() {
    cy.get(this.elements.successMessage)
      .should('be.visible')
      .and('contain', 'You logged into a secure area!')
  }
}

export default new LoginPage()