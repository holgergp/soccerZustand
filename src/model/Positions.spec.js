import Positions from './Positions';

describe('Positions should', () => {
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
    expect(updatedeague).toBe(expectedLeagueState);
  });
});
