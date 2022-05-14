/// <reference types="cypress" />
// this file will be used to ensure that the app starts up properly and displays basic infomration into the api. using mock test to ensure that the correct text is rendered

describe('app is launched', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="advice-card"]').as('adviceCard')
    cy.get('[data-test="advice-card-front"]').as('adviceCardFront')
    cy.get('[data-test="advice-card-back"]').as('adviceCardBack')
    cy.get('[data-test="new-advice-button-front"]').as('newAdviceButtonFront')
    cy.get('[data-test="new-advice-button-back"]').as('newAdviceButtonBack')

    cy.intercept('https://api.adviceslip.com/advice', {
      fixture: 'fakeAdviceOne.json',
    }).as('api')
  })

  it('call to api made on startup', () => {
    cy.get('@adviceCard')
  })

  it('main advice card is rendered', () => {
    cy.wait('@api')
    cy.get('@adviceCard')
    cy.get('@adviceCardFront')
      .find('h1')
      .should('have.text', '"Eating a sandwhich, only makes it tastier"')
    cy.get('@adviceCardBack').find('h1').should('not.have.text')
  })

  it.only('card is flipped displaying', () => {
    cy.wait('@api')
    cy.get('@adviceCard')
    cy.get('@newAdviceButtonFront').click()
    cy.intercept('https://api.adviceslip.com/advice', {
      fixture: 'fakeAdviceTwo.json',
    }).as('apiBack')
    cy.wait('@apiBack')
    cy.wait(3000)

    cy.get('@adviceCardBack')
      .find('h1')
      .should('have.text', '"Life is like a box of chocolates"')
    cy.get('@adviceCardFront').find('h1').should('not.have.text')
  })
})
