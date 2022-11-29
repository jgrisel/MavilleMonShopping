export class DeliveryPage {

    // liste des éléments composant la page de livraison du site à utiliser pour les tests

    elements ={

    TitleDeliveryPage : () => cy.get('h1'),

    ClickAndCollectBtn : () => cy.get('.card-collapse-click-collect'),

    ClickAndCollectLastName : () =>cy.get('#click-collect-lastname-5535')

    }

    // méthodes pour sélectionner le mode de livraison click and collect

    ChooseClickAndCollect() {
        this.elements.ClickAndCollectBtn().should('be.visible').click({timeout: 10000})
    }

}

