// Passing and failing test
// Suite name is inside `describe` function
describe('My First Test', () => {
// Test case name is inside suite
  it('Does not do much!', () => {
// Test step within a test case have to be implemented inside the it/specify block.
    expect(true).to.equal(true)
  })
  it('Fail a test', () => {
    //expect(false).to.equal(true)
  })
})

//Default test
describe('First basic test', () => {
  it('Visit the kitchen sink test site', () => {
    // Navigate to a web page
    cy.visit('https://example.cypress.io')

    // Find a DOM element(type) and perform an action(click)
    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    // URL is : https://example.cypress.io/commands/actions
    cy.url().should('include', '/commands/action')

    // Get an input element based of its class(.action-email), then type into it
    //DOM element description: `<input type="email" class="form-control action-email" id="email1" placeholder="Email">`
    // `.` is to id class and `#` is used for id ex to use id it will be .get('#email1')
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
    //NOTE: It's best practice not to chain anything after an action command;

    // Use `const` variables since object $email is undergoing change. While dealing with mutable objects and their value, it is recommended to use variables of type const.
    // Because cypress is ASYNCHRONOUS, we cannot use `const txtField = cy.get('.action-email')` so we use `.then` to get the result then store it in a var
    cy.get('.action-email').then(($email) => {
     // capture element value before button click and stored in const n
     const n = $email.text()
     cy.get('.action-email').type('fake@email.com').then(() => {
        // value capture after button click and stored in const
        const m = $email.text()
        // comparison
        expect(n).to.eq(m)
     })
    })
  })
})
