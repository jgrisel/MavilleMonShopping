export class SubscribePage {

    // liste des éléments composant la page d'inscription  du site à utiliser pour les tests

    elements ={

    SurnameField : () => cy.get('[data-cy="input-user-firstname"]'),

    NameField : () => cy.get('[data-cy="input-user-lastname"]'),

    PhoneField : () => cy.get('[data-cy="input-user-phone-number"]'),

    EmailField : () => cy.get('[data-cy="input-user-email"]'),

    PasswordField : () => cy.get('[data-cy="input-user-password"]'),

    ConfirmPasswordField : () => cy.get('[data-cy="input-user-password-confirmation"]'),

    ConditionsCheckBox : () => cy.get('[data-cy="checkbox-user-cgv"]'),

    NewsAcceptCheckBox : () => cy.get('[data-cy="checkbox-user-newsletter"]'),

    CreateAccountBtn : () => cy.get('[data-cy="bnt-sign-up-customer"]'),

    }

    // méthodes pour s'inscrire via le formulaire d'inscription.

    EnterSurname(Surname) {
       return this.elements.SurnameField().should('be.visible').type(Surname,{force: true}) 
    }

    EnterName(Name) {
        return this.elements.NameField().should('be.visible').type(Name,{force: true})  
     }

     EnterPhone(Phone) {
        return this.elements.PhoneField().should('be.visible').type(Phone,{force: true})  
     }

     EnterEmail(Email) {
        return this.elements.EmailField().should('be.visible').type(Email,{force: true})  
     }

     EnterPassword(Password) {
        return this.elements.PasswordField().should('be.visible').type(Password,{force: true})  
     }

     EnterConfirmPassword(ConfirmPassword) {
        return this.elements.ConfirmPasswordField().should('be.visible').type(ConfirmPassword,{force: true})  
     }

     CheckTheBox() {
        this.elements.ConditionsCheckBox().check({force: true}).should('be.checked')
        this.elements.NewsAcceptCheckBox().check({force: true}).should('be.checked')
     }

     Subscribe() {
        this.elements.CreateAccountBtn().click({force: true})
     }

}
