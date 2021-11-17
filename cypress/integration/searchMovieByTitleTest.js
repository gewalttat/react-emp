describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('input[name=search-input]')
    .type('fifty')   
    .should('have.value', 'fifty')
    .get('.search-button-caption').click()
    .url().should('include', '?fifty')  
  });
});