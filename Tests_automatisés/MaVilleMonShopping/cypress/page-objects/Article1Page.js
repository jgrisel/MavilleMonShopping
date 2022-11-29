export class Article1Page {

    // liste des éléments composant la page de l'article 1 du site à utiliser pour les tests

    elements ={

    NameProduct : () => cy.get('#product-name > div'),

    PriceProduct : () => cy.get('#product-price'),

    AddToCartBtn: () => cy.get('#add_to_cart'),

    ConfirmAddToCart : () => cy.get('.text-center > .flex-fill'),

    GotoCartBtn: () => cy.get('[data-cy="modal-btn-cart"]').contains('Voir mon panier')


    }

    // méthode pour ajouter des articles au panier de commande

     NavigateToShoppingCartPage() {
        this.elements.AddToCartBtn().should('be.visible').click({force: true})
        this.elements.GotoCartBtn().should('be.visible').click({force: true})
     }
    

}
