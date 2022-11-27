import {HomePage} from '../page-objects/HomePage'
import {SubscribePage} from '../page-objects/SubscribePage'
import { ShoppingCartPage } from '../page-objects/ShoppingCartPage';


describe('Inscription client, Recherche produit et ajout produit au panier', function ()  {

//Initialisation des différentes pages composant le "page object"

  const homePage = new HomePage();
  const subscribePage = new SubscribePage();
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

  it('Inscription client via le formulaire inscription du site', function () {
    homePage.navigateToSubscribePage()
    subscribePage.Subscribe(this.testdata.Surname)

  })


  after(() => {
  })

})
