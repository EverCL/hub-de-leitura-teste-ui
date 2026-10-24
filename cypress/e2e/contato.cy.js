///<reference types="cypress"/>

describe("Funcionalidade: contato", () => {
  it.only("Deve preencher o formulário", () => {
cy.visit('http://localhost:3000/index.html')

cy.get('#name').type('Everaldo Carlos')
cy.get('#email').type('Everaldocarlos@gmail.com')
cy.get('#subject').select("Suporte Técnico")
cy.get('#message').type('mensagem')
cy.get('#btn-submit').click()


    
});

  it("teste 2", () => {});


  it("teste 3", () => {});
})
