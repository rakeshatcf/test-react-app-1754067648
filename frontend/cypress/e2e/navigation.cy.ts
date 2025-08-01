describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to home page', () => {
    cy.url().should('include', '/');
    cy.contains('Home Page').should('be.visible');
  });

  it('should have correct layout structure', () => {
    cy.get('main').should('exist');
    cy.get('.content').should('exist');
  });
});