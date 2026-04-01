import LoginPage from '../pages/LoginPage'

describe('Login Test', () => {
  it('should login successfully', () => {
    const username = 'tomsmith'
    const password = 'SuperSecretPassword!'

    LoginPage.visit()
    LoginPage.login(username, password)
    LoginPage.verifySuccessfulLogin()
  })
})

