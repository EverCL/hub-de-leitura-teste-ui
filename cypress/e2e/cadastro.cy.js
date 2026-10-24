///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no hub de leitura', () => {
  
  beforeEach(() => {
   
    cy.visit('http://localhost:3000/register.html')
  
  });
  it('Deve fazer cadastro com sucesso usando função js', () => {
    let email = `teste${Date.now()}@teste.com`

    cy.get('#name').type(nome)
      cy.get('#email').type(email)
        cy.get('#phone').type('33999215508')
          cy.get('#password').type('ander$ever')
          cy.get('#confirm-password').type('ander$ever')
         cy.get('#terms-agreement').check()
         cy.get('#register-btn').click()
         //resultado esperado
         cy.url().should('include', 'dashboard')
    
  });

   it.only('Deve fazer cadastro com sucesso usando faker' , () => {
     let nome = faker.person.fullName() 
    let email = faker.internet.email()
    cy.get('#name').type(nome)
      cy.get('#email').type(email)
        cy.get('#phone').type('33999215508')
          cy.get('#password').type('ander$ever')
          cy.get('#confirm-password').type('ander$ever')
         cy.get('#terms-agreement').check()
         cy.get('#register-btn').click()
         //resultado esperado
         cy.url().should('include', 'dashboard')
         cy.get('#user-name').should('contain', nome)
    
  });
})