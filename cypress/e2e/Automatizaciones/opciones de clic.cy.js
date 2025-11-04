/// <reference types="Cypress" />


describe ("opciones de clic ", ()  =>{

    it('clic normal', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
    cy.wait(1000)

    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.contains('button', 'Login').click()
    cy.contains('Admin').should('be.visible').click()


    

    

        
    });
}



)//cierre de describe