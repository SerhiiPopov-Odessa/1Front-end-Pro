describe('template spec', () => {
  // Що сторінка має ссилку Booking у заголовку 
  it('What page has a Booking title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('header')
    .contains('a', /booking/i)
    .should('be.visible')
  })
})