import LoginPage from "../pages/LoginPage";
import NavigationPage from "../pages/NavigationPage";

describe('Full Flow Test', () => {

    it('should perform user journey', () => {

        // Login flow (your app)
        LoginPage.visit()
        LoginPage.login('admin', 'password')

        // Navigation flow (example app)
        cy.visit('https://example.cypress.io')

        NavigationPage.clickMenuItem('utilities')
        NavigationPage.verifyUrlIncludes('/utilities')

    })
})        
