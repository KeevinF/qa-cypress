class LoginPage {
visit() {
cy.visit('https://www.saucedemo.com/')
}

username () {
return cy.get('[id="user-name"]')
}

password() {
return cy.get('[id="password"]')
}

submit() {
return cy.get('[id="login-button"]')
}

}

export default new LoginPage()