class ContactInfo {
    // Define selectors using getter methods
    get nameField() { return cy.get('[id="name"]'); }
    get countryField() { return cy.get('[id="country"]'); }
    get cityField() { return cy.get('[id="city"]'); }
    get creditCardField() { return cy.get('[id="card"]'); }
    get monthField() { return cy.get('[id="month"]'); }
    get yearField() { return cy.get('[id="year"]'); }
    get submitButton() { return cy.get('button').contains("Purchase"); }
    get errorMessage() { return cy.get('.error-message'); }
    get successMessage() { return cy.get('h2').contains("Thank you for your purchase!"); }

    // Define actions
    enterName(name) {
        this.nameField.clear().type(name);
    }

    enterCountry(country) {
        this.countryField.clear().type(country);
    }

    enterCity(city) {
        this.cityField.clear().type(city);
    }

    enterCreditCard(creditCard) {
        this.creditCardField.clear().type(creditCard);
    }

    enterMonth(month) {
        this.monthField.clear().type(month);
    }

    enterYear(year) {
        this.yearField.clear().type(year);
    }

    clickSubmitButton() {
        this.submitButton.click();
    }

    // Define a method that performs the whole contact info submission action
    submitContactInfo({ name, country, city, creditCard, month, year }) {
        this.enterName(name);
        this.enterCountry(country);
        this.enterCity(city);
        this.enterCreditCard(creditCard);
        this.enterMonth(month);
        this.enterYear(year);
        this.clickSubmitButton();
    }
}

// Export an instance of the ContactInfo class
export const contactInfo = new ContactInfo();
