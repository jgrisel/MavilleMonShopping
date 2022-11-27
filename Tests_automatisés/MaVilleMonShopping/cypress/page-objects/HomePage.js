export class HomePage {

    // liste des éléments composant la page d'accueil du site à utiliser pour les tests

    elements ={

    CustomerOrSellerDropDownMenu : () => cy.contains('.d-none > .d-flex > .m-0','Client ou Vendeur'),

    SignUpOption : () => cy.get('[data-cy="link-signup-customer"]'),       
    

    }

    // méthode pour naviguer vers la page d'inscription du site

    navigateToSubscribePage() {
        this.elements.CustomerOrSellerDropDownMenu().click()
        this.elements.SignUpOption().click()
        cy.contains('.mt-10 > .col-12 > .mb-4','Créer mon compte').should('be.visible')
    }



}
