/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // simplemente devuelve false para evitar que Cypress falle
  return false;
});


describe (" registro-editar-eliminar formulario", ()  =>{

    it('', () => {
    cy.visit("https://demoqa.com/webtables")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)

    cy.get('#searchBox').should('be.visible').type('cierra').wait(1000)
    cy.get('#searchBox').should('be.visible').clear()

    //agregar registro
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').should('be.visible').type('andres',{delay:100})
    cy.get('#lastName').should('be.visible').type('QA',{delay:100})
    cy.get('#userEmail').should('be.visible').type('andres@yopmail.com',{delay:100})
    cy.get('#age').should('be.visible').type('21',{delay:100})
    cy.get('#salary').should('be.visible').type('100000000',{delay:100})
    cy.get('#department').should('be.visible').type('14',{delay:100})
    cy.get('#submit').click()
    cy.get('#searchBox').should('be.visible').type('andres').wait(1000)

    //editar
    cy.get('#edit-record-4').should('be.visible').click()
    cy.get('#firstName').should('be.visible').clear().type('the best',{delay:100})
    cy.get('#age').should('be.visible').clear().type('22',{delay:100})
    cy.get('#submit').click()

    //eliminar
    cy.get('#delete-record-4').should('be.visible').click()







    

    

        
    });
}



)//cierre de describe