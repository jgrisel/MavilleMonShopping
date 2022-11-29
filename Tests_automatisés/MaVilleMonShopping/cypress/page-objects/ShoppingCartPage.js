export class ShoppingCartPage {

    // liste des éléments composant la page du panier de commande du site à utiliser pour les tests

    elements ={

    TitleCartPage : () => cy.get('#details-cart-upper-part'),

    VerifyProduct : () => cy.get('[data-cy="product-name"] > a'),

    AddQuantityBtn : () => cy.get('button[data-cy="btn-quantity-more"]'),

    ReduceQuantityBtn : () => cy.get('button[data-cy="btn-quantity-less"]'),

    TotalCostField : () => cy.get('*[id^="total-price-pgh"]'),

    UnitCostField : () => cy.get('#unit-price > p'),

    DeleteProductBtn: () => cy.get('.delete-product-cart'),

    NumberArticle: () => cy.get('#cart-product-cnt'),

    ValidateCartBtn: () => cy.get('#validate-cart > .d-flex'),

    EmailField: () => cy.get('#user_email'),

    ValidateMailBtn : () => cy.get('input[value="Valider"]'),

    PasswordField: () => cy.get('#user_password'),

    ConnexionBtn : () => cy.get(':nth-child(5) > .btn',{timeout: 20000}).contains('Connexion')

    }

    // méthodes pour modifier, supprimer la quantité de l'article ajouté

    AddQuantity() {
        this.elements.AddQuantityBtn().should('be.visible').click({timeout: 10000})
    }

    ReduceQuantity() {
        this.elements.ReduceQuantityBtn().should('be.visible').click()
    }

    DeleteArticle() {
        this.elements.DeleteProductBtn().should('be.visible').click()
    }

    // méthodes pour se connecter à un compte client

    EnterEmailAccount(Email) {
        return this.elements.EmailField().should('be.visible').type(Email,{force: true})  
     }
    
    EnterPasswordAccount(Password) {
        return this.elements.PasswordField().should('be.visible').type(Password,{force: true})  
     }

    // méthode pour charger la page de livraison du site

    NavigateToDeliveryPage() {
        this.elements.ConnexionBtn().should('be.visible').click({force: true})
     }

}

