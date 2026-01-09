describe('template spec', () => {
  // Що сторінка має заголовок TODO
  it('What page has a TODO title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h2').contains(/todo/i).should('be.visible')
  })
  // Як варіант, перевірити що після вписання тексту, та натискання на “Додати” 
  // отримаєте новий елемент у списку з потрібним текстом
  it('check todo additions ', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[type="text"]').type('New todo').should('have.value', 'New todo');
    cy.contains('Додати').click();
    cy.contains('div', 'New todo').should('be.visible')
  })
  //… придумайте, тести штука для уважних та кмітливих 🙂
  it('check for Todo removals', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[type="text"]').type('New todo').should('have.value', 'New todo');
    cy.contains('Додати').click();
    cy.contains('New todo')
      .should('be.visible')
      .parent()   
      .find('[data-cy=delete-todo]')
      .click()
    cy.contains('div', 'New todo').should('not.exist');
  })
})