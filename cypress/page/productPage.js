class ProductsPage {
    
addBackpack() {
return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
}
addBoltTshirt() {
return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
}
cart() {
return cy.get('.shopping_cart_link')
}
checkout() {
return cy.get('[data-test="checkout"]')
}
}

export default new ProductsPage()