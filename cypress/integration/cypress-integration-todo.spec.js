describe('TODO APP > ', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Ok, there are no todos', () => {
        // todo-body
        // todo-done
        cy.get('#todo-body').children().should('have.length', 0);
        cy.get('#done-body').children().should('have.length', 0);
    });

    it('Ok, create a todo', () => {
        cy.get('input[cy-data="new-todo"]').type('take out the trash');
        cy.get('button[cy-data="create-todo"]').click();
        cy.get('#todo-body').children().should('have.length', 1);
        cy.get('#done-body').children().should('have.length', 0);
    });
})