import Positions from './Positions';

describe('Positions should', () => {
    let sampleLeague;
    beforeEach(() => {
        sampleLeague = [
            {
                name: 'Borussia Mönchengladbach',
                editing: true,
                id: 'BMG'
            },
            {
                name: 'Borussia Dortmund',
                editing: true,
                id: 'BVB'
            },
            {
                name: 'FC Bayern München',
                editing: true,
                id: 'FCB'
            }
        ];
    });
    it('swap two different teams', () => {
        const expectedLeagueState = [
            {
                name: 'Borussia Mönchengladbach',
                editing: true,
                id: 'BMG'
            },
            {
                name: 'FC Bayern München',
                editing: true,
                id: 'FCB'
            },
            {
                name: 'Borussia Dortmund',
                editing: true,
                id: 'BVB'
            }
        ];

        const updatedeague = Positions.recalculateSwappedPositions(
            'BVB',
            'FCB',
            sampleLeague
        );
        expect(updatedeague).toEqual(expectedLeagueState);
    });
    it('rename a specific team in positions', () => {
        const team = {
            name: 'Borussia Dortmund',
            editing: true,
            id: 'BVB'
        };
        const leagueWithRenamedLeague = Positions.recalculatePositionsWithRenamedTeam(
            team,
            'Schalke 04',
            sampleLeague
        );

        const expectedLeagueState = [
            {
                name: 'Borussia Mönchengladbach',
                editing: true,
                id: 'BMG'
            },
            {
                name: 'Schalke 04',
                editing: true,
                id: 'BVB'
            },
            {
                name: 'FC Bayern München',
                editing: true,
                id: 'FCB'
            }
        ];
        expect(leagueWithRenamedLeague).toEqual(expectedLeagueState);
    });
});
