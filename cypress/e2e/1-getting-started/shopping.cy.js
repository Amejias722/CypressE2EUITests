import { contactInfo } from "../../support/contact";

describe('E2E tests for e-commerce site', () => {

    it('User can login', () => {
      cy.visit('https://www.demoblaze.com/')
      cy.get('[id="login2"]').click()
      cy.get('[id="logInModalLabel"]').should('be.visible')
      cy.get('[id="loginusername"').type('QA Tester')
      cy.get('[id="loginpassword"]').type('Lexi QA 1234')
      cy.get('[onclick="logIn()"]').click()
      cy.intercept('POST', '/login', (req) => {
        req.reply((res) => {
          expect(res.statusCode).to.eq(200);
        });
      });
      
      
    });

    it('User can checkout item', () => {
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






