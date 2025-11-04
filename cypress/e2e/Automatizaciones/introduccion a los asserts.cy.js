/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // simplemente devuelve false para evitar que Cypress falle
  return false;
});

describe (" intro asserts", ()  =>{

    it('demo de los assers', () => {
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
    
    cy.get('#firstName').should('be.visible').type('the best')
    cy.wait(1000)
    cy.get('#lastName').should('be.visible').type('ripe')
    cy.wait(1000)
    cy.get('#userEmail').should('be.visible').should('be.enabled').type('cami@gmail.ocm')

    

        
    });
}



)//cierre de describe