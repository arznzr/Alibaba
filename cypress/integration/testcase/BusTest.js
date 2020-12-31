// Selectors
let selectBus="#search-panels > div.panels > div > ul > li:nth-child(4) > a > div > svg"
let originInput="#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-7 > div > div:nth-child(1) > input"
let tehranOrigin="#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-7 > div > div:nth-child(1) > div > ul.multitab-picker__items.pretty-scroll > li.hover > a > span"
let destinationInput= "#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-7 > div > div:nth-child(3) > input"
let mashadDestination="#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-7 > div > div:nth-child(3) > div > ul.multitab-picker__items.pretty-scroll > li.hover > a"
let firstDate="#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open.fade.left > div > div.alibaba-datepicker__container.slide-left > div:nth-child(1) > div > div > div.calendar__container > div:nth-child(26) > span.calendar__day__content.has-tooltip"
let confirm= "#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open.fade.left > div > footer > div:nth-child(2) > button"
let search = "#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-2 > button"
let findResult= "#bus-available-item-0 > div.available-columns__info.col-sm-9 > div.row.available-columns__info__toggle-available > div.available-columns__destination.col-sm-9.col-xs-7.col-lg-10 > div > div.destination-aircraft.col-xs-12.text-right > span"

context('Actions', () => {
  
  beforeEach(() => {
    cy.visit('https://www.alibaba.ir')
             it('wait', () => {
        cy.wait(4000)
  })
  })
 
    
  it('click on elements', () => {
        cy.get(selectBus ).click()
        cy.get(originInput).type("تهران").should('be.visible')
        cy.wait(1000)
        cy.get(tehranOrigin ).click()
        cy.get(destinationInput).type("مشهد").should('be.visible')
        cy.wait(1000)
        cy.get(mashadDestination ).click()
        cy.get(firstDate ).click()
        cy.get(confirm ).click();
        cy.get(search ).click();
        cy.get(findResult, { timeout: 20000 }).should('to.exist');
  })
});