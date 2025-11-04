describe ("Bienvenido al curso de cypress seccion 1", ()  =>{

     // Ignorar errores externos (por ejemplo, de CORS)
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

    it('mi primer test -> hola mundo', () => {
        
        cy.log("Hola mundo");
        cy.wait(1500)
    });
    
    it('segundo test  > campo name', () => {
        cy.visit("https://demoqa.com/text-box")

        cy.get ("#userName").type("andres")
        cy.wait(2000)
        cy.get ("#currentAddress").type("the best")
        cy.get ("#submit").click()
        cy.wait (3000)

    

        
    });
}



)//cierre de describe