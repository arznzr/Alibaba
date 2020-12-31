// Selectors
let originInput="#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-5 > div > div:nth-child(1) > input"
let firstOrigin="#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-5 > div > div:nth-child(1) > div > ul > li.hover > a"
let destinationInput="#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-5 > div > div:nth-child(3) > input"
let firstDestination= "#search-panels > div.panels > div > div > form > div.col-xs-12.col-md-5 > div > div:nth-child(3) > div > ul > li.hover > a"
let firstDate= "#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3.col-lg-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open > div > div.alibaba-datepicker__container.slide-left > div:nth-child(1) > div > div > div.calendar__container > div:nth-child(21) > span.calendar__day__content"
let secondDate="#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3.col-lg-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open.fade > div > div.alibaba-datepicker__container.slide-left > div:nth-child(1) > div > div > div.calendar__container > div:nth-child(29) > span.calendar__day__content.has-tooltip"
let towWay= "#search-panels > div.panels > div > div > form > div.gap > div > span:nth-child(2) > label"
let confirm= "#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3.col-lg-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open.fade > div > footer > div:nth-child(2) > button"
let search= "#search-panels > div.panels > div > div > form > div:nth-child(5) > button"
let contactUs= "#__layout > div > div:nth-child(3) > footer > div.container > div > div.col-xs-12.col-sm-2 > div.row > div:nth-child(1) > ul > li:nth-child(2) > a"
let nextDay="#alibaba_sidebar > div.px-2.col-md-8.col-lg-9 > div > div.available.row.isCompleted.empty > div.empty-availables.col-md-12.col-sm-12.col-xs-12 > div > div > div > button.adjacent-days__next"
let NextDay="#alibaba_sidebar .adjacent-days__next"
let findResult=".available-columns"

context('Actions', () => {
    
  it('Load Page',()=>{
      cy.visit('https://www.alibaba.ir')
  })
 
    
  it('Fill Data', () => {
        cy.get(towWay ).click()
        cy.get(originInput).type("تهران").should('be.visible')
        cy.get(firstOrigin ).click()
        cy.get(destinationInput).type("مشهد").should('be.visible')
        cy.get(firstDestination ).click()
        cy.get(firstDate ).click()
        cy.get(secondDate ).click();
        cy.get(confirm ).click();
  })
    
    it('Click Search',()=>{
        cy.get(search ).click();
    })
    
    it('Get flight results, if no resut it will click on next day with retries', {retries: 3}, () => {
        const attempt = Cypress._.get(cy.state('runnable'), '_currentRetry', 0);
        if(attempt==0) {
            cy.get(findResult, { timeout: 20000 }).should('to.exist');
        } else {
          cy.get(NextDay, { timeout: 20000 }).click();
          cy.get(findResult).should('to.exist');
        } 
      });
    
    it('Scroll and Click Contact Us',()=>{
        cy.get(contactUs).scrollIntoView();
        cy.get(contactUs).click();
    })

});