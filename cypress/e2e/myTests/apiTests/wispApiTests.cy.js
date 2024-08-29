
describe('URL Check', () => {
    it('should return a 200 status for HOMEPAGE', () => {
      cy.request('GET', 'https://hellowisp.com')
        .its('status')
        .should('equal', 200);
    });

    describe('API Test - verify footer links', () => {
        it('should return the correct response for each endpoint', () => {
          const base = 'https://hellowisp.com/shop';
          const endpoints = [
            { url: '/reproductive-health', expectedStatusCode: 200, expectedText: 'Reproductive Health' },
            { url: '/herpes', expectedStatusCode: 200, expectedText: 'Herpes' },
            { url: '/wellness-essentials', expectedStatusCode: 200, expectedText: 'Wellness Essentials' },
            { url: '/prevention', expectedStatusCode: 200, expectedText: 'Prevention' },
            { url: '/std', expectedStatusCode: 200, expectedText: 'STD' },
            { url: '/fertility', expectedStatusCode: 200, expectedText: 'Fertility' },
            { url: '/wisp-care', expectedStatusCode: 200, expectedText: 'Wispcare' },

          ];
      
          endpoints.forEach(endpoint => {
            cy.request({
              url: `${base}${endpoint.url}`,
              failOnStatusCode: false 
            }).then(response => {
              expect(response.status).to.eq(endpoint.expectedStatusCode);
              expect(response.headers['content-type']).to.include('text/html');
              expect(response.body).to.contain(endpoint.expectedText);

            });
          });
        });
      });
      
      
      
  });