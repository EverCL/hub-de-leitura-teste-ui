///<reference types="cypress"/>
import user from "../fixtures/usuário.json"

describe("Funcionalidade: login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login.html");
  });
  it("Deve fazer login com sucesso", () => {
    cy.get("#email").type("everaldocarlosluciano@gmail.com");
    cy.get("#password").type("ander$ever");
    cy.get("#login-btn").click();
    cy.url().should('include','dashboard');
  });

  it('deve fazer login usando comandos customizados', () => {
    cy.login('usuario@teste.com','user123')

  });

  it('Deve fazer login com senha e usuário admin usando comandos customizados', () => {
    cy.login('admin@biblioteca.com','admin123')

  });

  it('Deve fazer login usando importção de massa de dados', () => {
    cy.login(user.email, user.senha)

  });
});
