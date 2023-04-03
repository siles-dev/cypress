# cypress
Test out Cypress automation framework

<h1> Set up </h1>

1. Install Homebrew `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. Install node `brew install node`
2. Install cypress `npm install cypress`

<h1>Run</h1>

1. Open terminal and cd to project directory
2. Run `npx cypress open`
3. Follow prompts to configure E2E test
4. Create a default template test
5. Run test by terminal using `npx cypress run [--spec <path_to_spec_file]` or the pkg test runner

NOTES: 
- This is an asynchronous API!!!
- Do not quit terminal or close as these action terminate cypress.
- Create Independent Tests: Isolate the tests as much as possible. Don’t create tests dependent on each other.
- Authenticate applications programmatically: Authentication or Logging into your application should be handled programmatically (Example: Using API calls), reducing testing dependency.
- data-* attributes: Adding attributes to UI elements such as data-test, data-testid, or data-cy increases application testability and reduces dependency on selectors making the test stable.
  - Ex: cy.get('[data-cy=submit]').click()
-  Avoid using the after and afterEach hooks: There are chances that code inside the after and afterEach hooks may not execute as expected. In that case, Cypress may halt test execution and not execute remaining tests.
- Utilize Cypress Architecture for easy and stable tests. 
  - cy.contains('button', 'Click Me').as('myBtn')
  - cy.get('@myBtn').click()
- Avoid using cy.wait(): cy.wait() may slow down your test execution. Instead, rely on default wait mechanisms.

<h2>Pros:</h2>
- Supports Test-Driven development. 
- Provides Dashboard services. 
- Efficient debugging with Developer Tools accompanied with generation of stack trace and errors. 
- Not necessary to add waits to stop the execution for some time. By-default, the waits are applied, prior to executing the following step or assertion. 
- Able to monitor and control the characteristics of server response, functions, and timers, which are essentially needed for unit testing. 
- Check and manage network traffic. 
- Can be integrated with continuous integration tools. 
- Page responsiveness with viewport sizing.

<h2>Cons</h2>
- It is only based on JavaScript.
- A relatively new tool and hence, the community support is not extensive.
- It cannot perform mobile testing.
- Shadow Document Object Model (DOM) cannot be accessed.
- Tabs/child windows are managed by workarounds.
