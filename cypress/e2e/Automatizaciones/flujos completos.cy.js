/// <reference types="Cypress" />


describe (" ", ()  =>{


    beforeEach(() => {
  cy.session('login_orangehrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
  })
})
    it('pruebas en to end ', () => {

    
    

    

        
    });
}



)//cierre de describe