import { describe } from "mocha";


describe("User Searches for Powerlifter", () => {
    beforeEach(() => {
        cy.visit("https://www.openpowerlifting.org/"); 
    } );
    it("User searches athlete using searchbar", () => {
        
        cy.get('#searchfield').type("Alexis Mejias {enter}")
        cy.contains("Alexis Mejias").click()
        cy.contains("Personal Bests").should("be.visible");
        cy.contains("Alexis Mejias").should("be.visible");
       
    }
    );

}
);