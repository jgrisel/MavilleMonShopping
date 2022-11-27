export class ShoppingCartPage {

    elements ={


    QuantityField : () => cy.xpath('//input[@name="EST-3"]'),

    UpdateCartBttn : () => cy.xpath('//input[@name="updateCartQuantities"]'),

    TotalCostField : () => cy.xpath('//*[@id="Cart"]/form/table/tbody/tr[2]/td[7]'),

    ListCostField : () => cy.xpath('//*[@id="Cart"]/form/table/tbody/tr[2]/td[6]')

    }

    ChangeQuantity() {
        globalThis.Quantity = 2
        this.elements.QuantityField().click().clear().type(Quantity)
        this.elements.UpdateCartBttn().click()
    }

    VerifyPrice() {
        var TotalCost = this.elements.TotalCostField().invoke('text').then(cy.log).invoke('replace', '$', '').then(cy.log).then(parseFloat).should('be.a', 'number')
        var ListCost = this.elements.ListCostField().invoke('text').invoke('replace', '$', '').then(cy.log).then(parseFloat).should('be.a', 'number')
       expect(TotalCost / ListCost)==Quantity
    }

    
    }

