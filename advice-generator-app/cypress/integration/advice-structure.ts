/// <reference types="cypress" />
// this file will be used to ensure that the app starts up properly and displays basic infomration into the api. using mock test to ensure that the correct text is rendered

describe('app is launched', () => {
  beforeEach(() => {
    cy.get('[data-test="advice-card"]').as('adviceCard')
    cy.get('[data-test="advice-card-front]"').as('adviceCardFront')
    cy.get('[data-test="advice-card-back]"').as('adviceCardBack')
    cy.get('[data-test="new-advice-button]"').as('newAdviceButton')
    // sometime here we need to call the function that mocks the api call and gets our test data
  })

  it('main advice card is rendered', () => {
    cy.get('@adviceCard')
    cy.get('@adviceCardFront')
      .find('h1')
      .should('have.text', 'Eating a sandwhich, only makes it tastier')
    cy.get('@adviceCardBack').find('h1').should('not.have.text')
  })

  it('card is flipped displaying', () => {
    cy.get('@adviceCard')
    cy.get('@newAdviceButton').click()

    cy.get('@adviceCardBack')
      .find('h1')
      .should('have.text', 'life is like a box of chocalates')
    cy.get('@adviceCardFront').find('h1').should('not.have.text')
  })
})
