
import LoginPage from '../page/loginPage'

Cypress.Commands.add('login', (username, password) => {
    LoginPage.visit()
    LoginPage.username().type(username)
    LoginPage.password().type(password)
    LoginPage.submit().click()
})