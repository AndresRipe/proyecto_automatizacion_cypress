/// <reference types="Cypress" />

// Ignora errores no controlados de scripts externos
Cypress.on('uncaught:exception', (err, runnable) => {
  // simplemente devuelve false para evitar que Cypress falle
  return false;
});



describe (" ejemplo de type page up down", ()  =>{

    it('type page', () => {
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
    cy.get('#userName').type('{pageup}')
    cy.wait(2000)
    

    

        
    });
}



)//cierre de describe