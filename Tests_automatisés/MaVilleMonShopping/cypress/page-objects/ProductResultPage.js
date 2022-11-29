export class ProductResultPage {

    // liste des éléments composant la page de résultats de la recherche de produits du site à utiliser pour les tests

    elements ={

    SearchConfirmProduct : () => cy.get('h1 > .orange'),

    Article1: () => cy.get('a[href*="/3-jambon"]')
    }

    // méthode pour naviguer sur la page de l'article

    NavigateToArticle1Page() {
        this.elements.Article1().click({force: true})
    }

    

}
