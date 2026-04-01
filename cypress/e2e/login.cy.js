import LoginPage from '../pages/LoginPage'

describe('Login Test', () => {

  it('should login successfully', () => {

    const username = 'admin'
    const password = 'password'

    LoginPage.visit()   
    LoginPage.login(username, password)

    cy.contains('Welcome').should('be.visible')

  })

})

