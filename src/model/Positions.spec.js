import Positions from './Positions';

describe('Positions should', () => {
  let sampleLeague;
  beforeEach(() => {
    sampleLeague = [
      {
        rank: 1,
        team: {
          name: 'Borussia Mönchengladbach',
          editing: true,
          id: 'BMG'
        }
      },
      {
        rank: 2,
        team: {
          name: 'Borussia Dortmund',
          editing: true,
          id: 'BVB'
        }
      },
      {
        rank: 3,
        team: {
          name: 'FC Bayern München',
          editing: true,
          id: 'FCB'
        }
      }
    ];
  });
  it('swap two different teams', () => {
    const expectedLeagueState = [
      {
        rank: 1,
        team: {
          name: 'Borussia Mönchengladbach',
          editing: true,
          id: 'BMG'
        }
      },
      {
        rank: 2,
        team: {
          name: 'FC Bayern München',
          editing: true,
          id: 'FCB'
        }
      },
      {
        rank: 3,
        team: {
          name: 'Borussia Dortmund',
          editing: true,
          id: 'BVB'
        }
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
        rank: 1,
        team: {
          name: 'Borussia Mönchengladbach',
          editing: true,
          id: 'BMG'
        }
      },
      {
        rank: 2,
        team: {
          name: 'Schalke 04',
          editing: true,
          id: 'BVB'
        }
      },
      {
        rank: 3,
        team: {
          name: 'FC Bayern München',
          editing: true,
          id: 'FCB'
        }
      }
    ];
    expect(leagueWithRenamedLeague).toEqual(expectedLeagueState);
  });
});
