import { scenariosRemove } from '../fixtures/scenariosbuy.json'
import ProductsPage from '../page/productPage.js'
import LoginPage from '../page/loginPage.js'
describe('Buy', () => {

    scenariosRemove.forEach((scenario) => {
        it(`${scenario.description}`, () => {
            LoginPage.visit()
            LoginPage.username().type(scenario.username)
            LoginPage.password().type(scenario.password)
            LoginPage.submit().click()
            cy.screenshot('login')

            if (scenario.description === 'Block Login') {
                cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
            } else {
                cy.url().should('include', '/inventory.html')
                ProductsPage.addBackpack().click()
                ProductsPage.addBoltTshirt().click()
                ProductsPage.cart().click()
                cy.wait(1500)
                cy.url().should('include', '/cart.html')
                ProductsPage.checkout().click()
                cy.url().should('include', '/checkout-step-one.html')
            }
        })
    })
})
