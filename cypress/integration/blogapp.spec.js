describe('Blog List app', function()  {
// npm install wsl2 on both end
  beforeEach( function()  {
    cy.request('POST', 'http://localhost:3001/api/test/reset')

    cy.visit('http://localhost:3000')

  })

  it('should open the front page', function()  {

    cy.visit('http://localhost:3000')
    cy.contains('blogs')
  })

})