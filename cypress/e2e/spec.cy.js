// Passing and failing test
//describe('My First Test', () => {
//  it('Does not do much!', () => {
//    expect(true).to.equal(true)
//  })
//  it('Fail a test', () => {
//  expect(false).to.equal(true)
//  })
//})

//Default test
describe('First basic test', () => {
  it('Visit the kitchen sink', () => {
    // Navigate to a web page
    cy.visit('https://example.cypress.io')

    // Find a DOM element(type) and perform an action(click)
    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/action')

    // Get an input element based of its class(.action-email), then type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
    //NOTE: It's best practice not to chain anything after an action command;
  })
})
