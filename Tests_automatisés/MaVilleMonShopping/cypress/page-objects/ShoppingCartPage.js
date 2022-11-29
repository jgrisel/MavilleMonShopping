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

    NumberArticle: () => cy.get('#cart-product-cnt')

    }

    // méthode pour modifier, supprimer la quantité de l'article ajouté

    AddQuantity() {
        this.elements.AddQuantityBtn().should('be.visible').click({timeout: 10000})
    }

    ReduceQuantity() {
        this.elements.ReduceQuantityBtn().should('be.visible').click()
    }

    DeleteArticle() {
        this.elements.DeleteProductBtn().should('be.visible').click()
    }
    
}

