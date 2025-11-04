/// <reference types="Cypress" />

require('cypress-plugin-tab')

Cypress.on('uncaught:exception', (err, runnable) => {
  // simplemente devuelve false para evitar que Cypress falle
  return false;
});

describe (" ejemplo funcion TAB", ()  =>{

    it('type con tab', () => {
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
    cy.get('#firstName').type('andres').tab().
    type('ripe').tab().
    type('andres@camilo')

        
    });
}



)//cierre de describe