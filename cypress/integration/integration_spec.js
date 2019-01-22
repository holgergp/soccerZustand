describe('Webapp visible', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Change Teamname', () => {
        const firstTeamSelector = ':nth-child(1) > span > .col-md-12 > .textPointer';
        const firstTeam = cy.get(firstTeamSelector);
        const newTeamName = 'Der beste Verein';
        firstTeam.type(`{selectall}{backspace}${newTeamName}`);
        cy.get(firstTeamSelector).should('contain', newTeamName);
    });
    it('Move Team around', () => {
        const firstTeamSelector = ':nth-child(1) > span > .col-md-12';
        const thirdTeamSelector = ':nth-child(3) > span > .col-md-12';
        cy.get(firstTeamSelector).drag(thirdTeamSelector);
    });
});


