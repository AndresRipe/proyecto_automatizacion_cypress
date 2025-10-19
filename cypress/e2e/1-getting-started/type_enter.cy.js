/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe ("Funciones para Type", ()  =>{

    it('Type--> Enter', () => {
    cy.visit("https://www.google.com/")
    cy.title().should('eq','Google')
    cy.wait(5000)


    cy.get('#APjFqb').type('voy a ser el mejor qa automation of the world {enter}')
    cy.get('.cHaqb').click

    

        
    });
}



)//cierre de describe