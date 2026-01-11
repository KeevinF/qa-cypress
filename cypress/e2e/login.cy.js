import {cenariosLogin} from '../fixtures/scenarioslogin.json'
import loginPage from '../page/loginPage.js'
import productPage from '../page/productPage.js'
describe('Login e fluxo de compra', () => {
    cenariosLogin.forEach((cenario) => {
        it('Login: $cenario.description', () => {
            loginPage.visit()
            loginPage.username().type(cenario.username)
            loginPage.password().type(cenario.password)
            loginPage.submit().click()

            if (cenario.description === 'Standard User') {
                productPage.addBackpack().click()
                productPage.addBoltTshirt().click()
                productPage.cart().click()
                productPage.checkout().click()
            }
        })
    })
})