export class HomePage {

    // liste des éléments composant la page d'accueil du site à utiliser pour les tests

    elements ={

    CustomerOrSellerDropDownMenu : () => cy.contains('.d-none > .d-flex > .m-0','Client ou Vendeur'),

    SignUpOption : () => cy.get('[data-cy="link-signup-customer"]'),
    
    ConnectOption : () => cy.contains('.dropdown-menu > :nth-child(1) > .blue-navy','Se connecter'),

    CreateShopOption : () => cy.get('[data-cy="link-signup-shop"]'),

    ConfirmAlertAccount : () => cy.get('[class="flex-fill"]').contains('Bienvenue, vous êtes connecté.'),

    CustomerDropDownMenu : () => cy.contains('.d-none > .d-flex > .m-0','Mon compte'),

    SearchBarField: () => cy.get('#q'),
    
    MagnifyingGlassIcon: () => cy.get('[data-cy="btn-search"] > .icons8'),

    AccountDropDownMenu: () => cy.get('#dropdown-nav-account > .align-items-center > .icons8-male-user'),

    DeconnectOption : () => cy.get('[type="submit"]').contains('Se déconnecter')

    }

    // méthode pour naviguer vers la page d'inscription du site

    navigateToSubscribePage() {
        this.elements.CustomerOrSellerDropDownMenu().click()
        this.elements.SignUpOption().should('be.visible')
        this.elements.ConnectOption().should('be.visible')
        this.elements.CreateShopOption().should('be.visible')
        this.elements.SignUpOption().click()
        cy.contains('.mt-10 > .col-12 > .mb-4','Créer mon compte').should('be.visible',{ timeout: 10000 })
    }

    navigateToAccountPage() {
        this.elements.CustomerDropDownMenu().click({force: true},{ timeout: 10000 })
    }

    // méthode pour rechercher des articles sur le site à l'aide de la barre de recherche

    TypeProduct(Product) {
       return this.elements.SearchBarField().should('be.visible').click({force: true}).type(Product,{force: true})
    }
    NavigateToProductResultPage() {
       this.elements.MagnifyingGlassIcon().should('be.visible').click({force: true})
    }

    // méthode pour se déconnecter du compte client

    DeconnectCustomer() {
        this.elements.AccountDropDownMenu().should('be.visible').trigger('mouseover')
        this.elements.DeconnectOption().click({force: true})
     }


}
