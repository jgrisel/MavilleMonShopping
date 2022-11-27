export class SubscribePage {


    elements ={


    SurnameField : () => cy.get('[data-cy="input-user-firstname"]'),

    PasswordField : () => cy.xpath('//input[@name="password"]'), 

    logBtn : () => cy.xpath('//input[@name="signon"]')

    }

    Subscribe(Surname) {
       return this.elements.SurnameField().click().clear().type(Surname) 
    }

}
