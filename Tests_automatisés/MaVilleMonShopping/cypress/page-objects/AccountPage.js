export class AccountPage {

    // liste des éléments composant la page du compte client du site à utiliser pour les tests

    elements ={

    AccountCustomerName : () => cy.get('h2'),

    InformationsTab : () => cy.get('[data-cy="btn-user-infos"]'),

    JackpotTab : () => cy.get('[data-cy="btn-user-pot"]'),

    ProductTab : () => cy.get('[data-cy="btn-user-shared-products"]'),

    OrderReservationTab : () => cy.get('[data-cy="btn-user-orders-reservation"]'),

    EmailAccountField : () => cy.get('#user_email'),

    UpdateAccountBtn : () =>cy.get('[data-cy="btn-update-infos"]'),

    ConfirmAlertUpdate : () =>cy.get('.gap-2 > .flex-fill').contains('Utilisateur modifié avec succès'),


    RandomEmail : () => String(
        Date.now().toString(32) +
          Math.random().toString(16) + ('@gmail.com')
      )

    }

    // méthode pour modifier l'Email du compte client crée

    ChangeEmailAccount() {
        this.elements.InformationsTab().click({force: true})
        this.elements.EmailAccountField().should('be.visible').clear({force: true}).type(this.elements.RandomEmail(),{force: true})
        this.elements.UpdateAccountBtn().click({force: true})
    }

}
