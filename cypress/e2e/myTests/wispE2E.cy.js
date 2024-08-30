import { describe } from "mocha";

/*Wisp is a healthcare company that focuses on providing convenient and accessible telehealth services. 
They specialize in offering virtual consultations, medical advice, and prescription medications for a range of common health issues. 
By leveraging technology, Wisp aims to make healthcare more straightforward and efficient, allowing patients to receive care from the comfort of their homes.*/


const ids = {
    acceptCookies: '[id="onetrust-accept-btn-handler"]',
    planBImage: '[alt="Hands holding Plan B and Ella pills on a pink background"]',
    planBimage2: '[alt="Ella emergency contraception in foil packet to prevent pregnancy on a red surface, on a pink background"]',
    puaPharmacy: '[data-cy="product-flow-option-button-EU-OT-LP"]',
    nextButton: '[data-cy="navigation-buttons-next"]',
    noThanksoption: '[data-cy="product-flow-option-button-unknown"]',
    checkoutButton: '[data-cy="cart-checkout-click"]',
    removeItem: '[data-cy="remove-cart-item-button"]'
    }

describe("Wisp E2E Checkout", () => {
    beforeEach(() => {
        cy.visit("https://hellowisp.com")
        cy.wait(3000)
        cy.intercept('GET', 'https://my.jst.ai/ifm_4.1.html*', {
            statusCode: 204, // No Content response
            body: '', // Empty body
          }).as('ignorePopUp');
    });
it('User can add item to cart and checkout', () => {
    cy.get(ids.acceptCookies, { timeout: 10000 }).should('be.visible').click();
    cy.intercept('@ignorePopUp')// this blocks the pop-up 

    cy.step('User selects Shop Treatments Button')
    cy.get('[class="button-secondary font-medium"]').contains('Shop Treatments').click()
    cy.url().should('include', 'https://hellowisp.com/shop-home')

    cy.step('User Selects Option')
    cy.contains('Reproductive Health').scrollIntoView()
    cy.get(ids.planBImage).click()
    cy.url().should('include','/emergency-contraception')
    cy.get(ids.planBimage2).click()
    cy.url().should('include', '/products/ella')

    cy.step('User goes through checkout flow')
    cy.get('button').contains('Get Started').click()
    cy.url().should('include', 'ella?flow=open')
    cy.get(ids.puaPharmacy).click()
    cy.get(ids.nextButton).click();

    for (let i = 0; i < 4; i++) {
    cy.get(ids.noThanksoption).click();
    cy.get(ids.nextButton).click();
    cy.wait(2000);
    }

  cy.get('button').contains('Add to Cart').should('be.visible').click();
  cy.url().should('include', "https://hellowisp.com/cart");
  cy.get(ids.checkoutButton).should('be.visible');

  cy.step('User removes item')
  cy.get(ids.removeItem).click()
  cy.contains('Your cart is currently empty!').should('be.visible')

});


});