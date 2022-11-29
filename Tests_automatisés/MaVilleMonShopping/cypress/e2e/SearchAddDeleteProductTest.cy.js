import {HomePage} from '../page-objects/HomePage'
import {ProductResultPage} from '../page-objects/ProductResultPage'
import {Article1Page} from '../page-objects/Article1Page'
import {ShoppingCartPage} from '../page-objects/ShoppingCartPage'

describe('Search,Add, modify and delete product', function ()  {

//Initialisation des différentes pages composant le "page object"

  const homePage = new HomePage();
  const productResultPage = new ProductResultPage();
  const article1Page = new Article1Page();
  const shoppingCartPage = new ShoppingCartPage();


//Accéder aux valeurs du fichier fixture vers le fichier test

  beforeEach(function () {
    cy.fixture('dataset').then(function (testdata) {
      this.testdata = testdata;
    })
  })

//Action pour charger la page internet du site www.mavillemonshopping.fr avant d'éxécuter les différents tests

  before(()=> {
    cy.visit('https://www.mavillemonshopping.fr')
    cy.contains('#axeptio_btn_acceptAll', 'Tout accepter').click()
    cy.url().should('eq', 'https://www.mavillemonshopping.fr/fr')
  })

// Cas de tests pour chercher un produit, l'ajouter au panier de commande, modifier sa quantité

  it('Search product with the search bar', function () {
   homePage.TypeProduct(this.testdata.Product)
   homePage.NavigateToProductResultPage()
   productResultPage.elements.SearchConfirmProduct().should('be.visible').invoke('text').should('contains',this.testdata.Product)
   productResultPage.NavigateToArticle1Page()
   article1Page.elements.NameProduct().should('be.visible').invoke('text').should('contains',this.testdata.Article1)
   article1Page.elements.PriceProduct().should('be.visible').invoke('text').should('contains',this.testdata.UnitPrice)
  })

  it('Add, modify product to shopping cart', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    article1Page.NavigateToShoppingCartPage()
    article1Page.elements.ConfirmAddToCart().should('be.visible').invoke('text').should('contains','Article ajouté au panier !')
    shoppingCartPage.elements.TitleCartPage().should('be.visible').invoke('text').should('contains','Mon panier')
    shoppingCartPage.elements.VerifyProduct().should('be.visible').invoke('text').should('contains',this.testdata.Article1)
    shoppingCartPage.AddQuantity()
    shoppingCartPage.elements.TotalCostField().invoke('text').should('eq',this.testdata.TotalPriceAdd)
    shoppingCartPage.ReduceQuantity()
    shoppingCartPage.elements.TotalCostField().invoke('text').should('eq',this.testdata.TotalPriceReduce) 
   })

//Après le test, cela permet de supprimer l'article.

   after(()=> {
    shoppingCartPage.DeleteArticle()
    shoppingCartPage.elements.NumberArticle().invoke('text').should('eq','Sous-total TTC (0 articles)')
  })

})