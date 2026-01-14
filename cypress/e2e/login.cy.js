import { scenariosLogin } from '../fixtures/scenarioslogin.json'
import ProductPage from '../page/productPage.js'

describe('Login e fluxo de compra', () => {
    scenariosLogin.forEach((cenario) => {
        
        it(`Login: ${cenario.description}`, () => {
            
            // Olha como substitui aquelas 4 linhas por 1 só:
            cy.login(cenario.username, cenario.password)

            // A lógica continua igual:
            if (cenario.description === 'Standard User') {
                ProductPage.addBackpack().click()
                ProductPage.addBoltTshirt().click()
                ProductPage.cart().click()
                ProductPage.checkout().click()
            }
        })
    })
})