import { contactInfo } from "../../support/contact";


describe('E2E tests for e-commerce site', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/')
  });
  
  
    it('User can login', () => {
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
     
      cy.get('[src="imgs/galaxy_s6.jpg"]').first().click()
      cy.get('a[href="#"]').contains('Add to cart').click();
      cy.get('a[href="cart.html"]').contains('Cart').click();
      cy.get('button').contains('Place Order').click();
      contactInfo.submitContactInfo({
        name: 'Lexi Test',
        country: 'USA',
        city: 'RVA',
        creditCard: '4111111111111111',
        month: '01',
        year: '2025'
    });
    contactInfo.successMessage.should('be.visible');
     })
     
    
  })
