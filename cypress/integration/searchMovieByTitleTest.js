describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('input[name=search-input]')
    .type('привет лера')   
    .should('have.value', 'привет лера')
    .get('.search-button-caption').click()
    .url().should('include', '?привет_лера')  
  });
});