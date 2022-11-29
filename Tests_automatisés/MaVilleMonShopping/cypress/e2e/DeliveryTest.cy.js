import {HomePage} from '../page-objects/HomePage'
import {ProductResultPage} from '../page-objects/ProductResultPage'
import {Article1Page} from '../page-objects/Article1Page'
import {ShoppingCartPage} from '../page-objects/ShoppingCartPage'
import {DeliveryPage} from '../page-objects/DeliveryPage'

describe('Search,Add, modify and delete product', function ()  {

//Initialisation des différentes pages composant le "page object"

  const homePage = new HomePage();
  const productResultPage = new ProductResultPage();
  const article1Page = new Article1Page();
  const shoppingCartPage = new ShoppingCartPage();
  const deliveryPage = new DeliveryPage();

//Accéder aux valeurs du fichier fixture vers le fichier test

  beforeEach(function () {
    cy.fixture('dataset').then(function (testdata) {
      this.testdata = testdata;
    })
  })

//Action pour charger la page internet du site www.mavillemonshopping.fr avant d'éxécuter les différents tests

  before(function () {
   cy.visit('https://www.mavillemonshopping.fr')
   cy.contains('#axeptio_btn_acceptAll', 'Tout accepter').click()
   cy.url().should('eq', 'https://www.mavillemonshopping.fr/fr')
  })

// Cas de tests pour chercher un produit, l'ajouter au panier de commande, puis choisir le mode de livraison click and collect

  it('Search and add Product to shopping cart', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    homePage.TypeProduct(this.testdata.Product)
    homePage.NavigateToProductResultPage()
    productResultPage.elements.SearchConfirmProduct().should('be.visible').invoke('text').should('contains',this.testdata.Product)
    productResultPage.NavigateToArticle1Page()
    article1Page.elements.NameProduct().should('be.visible').invoke('text').should('contains',this.testdata.Article1)
    article1Page.elements.PriceProduct().should('be.visible').invoke('text').should('contains',this.testdata.UnitPrice)
    article1Page.NavigateToShoppingCartPage()
    article1Page.elements.ConfirmAddToCart().should('be.visible').invoke('text').should('contains','Article ajouté au panier !')
    shoppingCartPage.elements.TitleCartPage().should('be.visible').invoke('text').should('contains','Mon panier')
    shoppingCartPage.elements.VerifyProduct().should('be.visible').invoke('text').should('contains',this.testdata.Article1)
  })

  it('Choose the delivery method click and collect', function () {
    shoppingCartPage.elements.ValidateCartBtn().should('be.visible').click()
    shoppingCartPage.EnterEmailAccount(this.testdata.EmailForDelivery)
    shoppingCartPage.elements.ValidateMailBtn().should('be.visible').click()
    cy.contains('#axeptio_btn_acceptAll', 'Tout accepter').click()
    shoppingCartPage.EnterPasswordAccount(this.testdata.Password)
    shoppingCartPage.NavigateToDeliveryPage()
    deliveryPage.elements.TitleDeliveryPage().invoke('text').should('contain', 'Livraison de mes achats')
    deliveryPage.ChooseClickAndCollect()
    deliveryPage.elements.ClickAndCollectLastName().should('be.visible')
   })

//Après le test, cela permet de se déconnecter du compte client

   after(()=> {
    homePage.DeconnectCustomer()
    homePage.elements.CustomerOrSellerDropDownMenu().should('be.visible')
  })

})