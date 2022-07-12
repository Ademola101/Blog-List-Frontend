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

    it('it fails with wrong credentials', function() {

      cy.get('#username').type('sade')
      cy.get('#password').type('wrong')
      cy.contains('login').click()
      cy.contains('login')

    })



  })

  describe('when login', function () {

    beforeEach( function () {
      cy.get('#username').type('sade')
      cy.get('#password').type('werey')
      cy.contains('login').click()

    })


    it('A blog can be created', function() {

      cy.contains('Add new Note').click()
      cy.get('#title-input').type('A test note')
      cy.get('#author-input').type('Test')
      cy.get('#url-input').type('www.test.com')
      cy.get('#likes-input')
      cy.contains('cancel')
      cy.contains('save').click()


    })

  })

})