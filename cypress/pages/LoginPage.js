class LoginPage {

  elements = {
    username: '#username',
    password: '#password',
    loginBtn: '#loginBtn'
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
}

export default new LoginPage()