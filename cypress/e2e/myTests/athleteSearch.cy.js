import { describe } from "mocha";


describe("User Searches for Powerlifter", () => {
    beforeEach(() => {
        cy.visit("https://www.openpowerlifting.org/"); 
    } );
    it("User searches athlete using searchbar", () => {
        
        cy.get('#searchfield').type("Tamara Walcott {enter}")
        cy.contains("Tamara Walcott").click()
        cy.contains("Personal Bests").should("be.visible");
        cy.contains("Tamara Walcott").should("be.visible");
       
    }
    );

}
);