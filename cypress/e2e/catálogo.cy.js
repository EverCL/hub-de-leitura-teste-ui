///<reference types="cypress"/>

describe('funcionalidade  catálogo de livros', () => {
    
    beforeEach(()=> {
        cy.visit('http://localhost:3000/catalog.html')
    })
    it.skip('Deve clicar no botão Adicionar à cesta', () => {
         cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
         cy.get('#cart-count').should('contain', 1)
    });
    it('Deve clicar em todos os botões adicionar à cesta ', () => {
         cy.get('.btn-primary').click({multiple: true})

    });
    it('Deve clicar no primero botão adicionar à cesta ', () => {
         cy.get('.btn-primary').first() .click()

});

it('Deve clicar em todos os botões adicionar à cesta ', () => {
         cy.get('.btn-primary').last() .click()

})

it('Deve clicar em todos os botões adicionar à cesta ', () => {
         cy.get('.btn-primary').eq(0).click()

})

it('Deve clicar em todos os botões adicionar à cesta ', () => {
         cy.get('.btn-primary').eq(3).click()
          cy.get('#global-alert-container').should('contain', 'A Menina que Roubava Livros')

})

it('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
         cy.contains('A Arte da Guerra').click()
         cy.url().should('include', 'book-details')
         cy.get('#add-to-cart-btn').click()
cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
})

})