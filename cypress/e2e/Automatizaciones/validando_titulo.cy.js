/// <reference types="Cypress" />

// Evitar que errores de la página rompan el test
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("Sección 1: Validando el título", () => {

    it("Test validando el título", () => {
        // Abrir la página
        cy.visit("https://demoqa.com/text-box");

        // Validar que el título sea correcto
        cy.title().should("eq", "DEMOQA");

        // Mensaje en el Command Log de Cypress
        cy.log("La función title funcionó ok");
    });

});
