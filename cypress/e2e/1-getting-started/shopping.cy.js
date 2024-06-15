import { contactInfo } from "../../support/contact";

describe('E2E tests for e-commerce site', () => {

    it('[PROJECT -TEST CASE NUMBER] passes', () => {
      cy.visit('https://www.demoblaze.com/')
      cy.get('a[href="prod.html?idp_=1"]').first().click()
      cy.get('a[href="#"]').contains('Add to cart').click();
      cy.get('a[href="cart.html"]').contains('Cart').click();
      cy.get('button').contains('Place Order').click();
      contactInfo.submitContactInfo({
        name: 'Lexi Test',
        country: 'Murica',
        city: 'RVA',
        creditCard: '4111111111111111',
        month: '01',
        year: '2025'
    });
    contactInfo.successMessage.should('be.visible');
     })
     
    
  })






