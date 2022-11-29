import {HomePage} from '../page-objects/HomePage'
import {SubscribePage} from '../page-objects/SubscribePage'
import { AccountPage } from '../page-objects/AccountPage';

describe('Customer Account registration', function ()  {

//Initialisation des différentes pages composant le "page object"

  const homePage = new HomePage();
  const subscribePage = new SubscribePage();
  const accountPage = new AccountPage();

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

// Cas de tests inscription client via formulaire du site

  it('Customer Account Registration with the registration form', function () {
    homePage.navigateToSubscribePage()
    subscribePage.EnterSurname(this.testdata.Surname)
    subscribePage.EnterName(this.testdata.Name)
    subscribePage.EnterPhone(this.testdata.Phone)
    subscribePage.EnterEmail(this.testdata.Email)
    subscribePage.EnterPassword(this.testdata.Password)
    subscribePage.EnterConfirmPassword(this.testdata.PasswordConfirmation)
    subscribePage.CheckTheBox()
    subscribePage.Subscribe()
    homePage.elements.ConfirmAlertAccount().should('be.visible')
    homePage.elements.CustomerDropDownMenu().should('be.visible')
  })

//Après le test,  la fonction suivante modifie l'adresse mail du compte (random) afin de pouvoir ré-utiliser le test

  after(function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    homePage.navigateToAccountPage()
    accountPage.elements.AccountCustomerName().should('have.text',this.testdata.Surname)
    accountPage.elements.InformationsTab().should('be.visible')
    accountPage.elements.JackpotTab().should('be.visible')
    accountPage.elements.OrderReservationTab().should('be.visible')
    accountPage.elements.ProductTab().should('be.visible')
    accountPage.ChangeEmailAccount()
    accountPage.elements.ConfirmAlertUpdate().should('be.visible')
  })

})