import Positions from './Positions';

describe('Positions should', () => {
  it('swap two different teams', () => {
    const sampleLeague = [
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
    const sampleLeague = [
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
    const team = {
      name: 'Borussia Dortmund',
      editing: true,
      id: 'BVB'
    };

    const leagueWithRenamedLeague = Positions.recalculatePositionsWithRenamedTeam(
      team,
      'S04',
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
          id: 'S04'
        }
      }
    ];
    expect(leagueWithRenamedLeague).toEqual(expectedLeagueState);
  });
});
