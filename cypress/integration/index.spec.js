/* eslint-disable no-undef */
describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a link to the react docs', () => {
    cy.queryByText('Learn React').should('be.visible');
  });
});
