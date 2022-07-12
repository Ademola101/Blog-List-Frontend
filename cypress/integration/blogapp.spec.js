describe('Blog List app', function()  {
// npm install wsl2 on both end
  beforeEach( function()  {
    cy.request('POST', 'http://localhost:3001/api/test/reset')

    const user = {
      username: 'sade',
      password: 'werey'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user )

    cy.visit('http://localhost:3000')

  })

  it('Login form is shown', function()  {

    cy.visit('http://localhost:3000')
    cy.contains('login')
  })

  describe('Login', function() {

    it('succeed with successful credentials', function() {

      cy.get('#username').type('sade')
      cy.get('#password').type('werey')
      cy.contains('login').click()
      cy.contains('sade logged in')

    })


  })

})