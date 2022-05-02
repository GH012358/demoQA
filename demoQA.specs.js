describe("Form filling and submitting", () => {

    it("Open the webpage", () => {
        let userDetails = {
            name: "JohnDoe",
            email: "johndoe@gmail.com",
            currAddress: "London, UK",
            permAddress: "Glasgow, UK"
        };

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
	    
        cy.visit("https://demoqa.com/");
        //assert the url
	cy.url().should("include", "https://demoqa.com/");
        
        cy.get(".card.mt-4.top-card:first-child").click();
        cy.get("#item-0").click();
        cy.get("#userName").clear().type(userDetails.name);
        cy.get("#userEmail").clear().type(userDetails.email);
        cy.get("#currentAddress").clear().type(userDetails.currAddress);
        cy.get("#permanentAddress").clear().type(userDetails.permAddress);
        cy.get("#submit").click();

        cy.get("p#name").should("have.text", `Name:${userDetails.name}`)
        cy.get("p#email").should("have.text", `Email:${userDetails.email}`)
        cy.get("p#currentAddress").should("have.text", `Current Address :${userDetails.currAddress} `)
        cy.get("p#permanentAddress").should("have.text", `Permananet Address :${userDetails.permAddress}`)
    });
});
