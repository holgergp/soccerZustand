export default class Positions {
  static _findTeamRank = (teamId, positions) => {
    return positions.find(position => position.team.id === teamId).rank;
  };

  static _findTeam = (teamId, positions) => {
    const foundPosition = positions.find(
      position => position.team.id === teamId
    );
    return foundPosition.team;
  };

  static recalculateSwappedPositions = (
    sourceTeamId,
    targetTeamId,
    currentPositions
  ) => {
    const sourceRank = Positions._findTeamRank(sourceTeamId, currentPositions);
    const targetRank = Positions._findTeamRank(targetTeamId, currentPositions);

    const sourceTeam = Positions._findTeam(sourceTeamId, currentPositions);
    const targetTeam = Positions._findTeam(targetTeamId, currentPositions);

    const newTarget = {
      rank: targetRank,
      team: sourceTeam
    };

    const newSource = {
      rank: sourceRank,
      team: targetTeam
    };

    currentPositions[targetRank - 1] = newTarget;
    currentPositions[sourceRank - 1] = newSource;
    return currentPositions;
  };

  static recalculatePositionsWithRenamedTeam = (team, updatedText, currentPositions) => {
    const teamRank = Positions._findTeamRank(team.id, currentPositions);

    //team.editing = false;
    team.name = updatedText;

    const updatedPosition = {
      rank: teamRank,
      team: team
    };

    currentPositions[teamRank - 1] = updatedPosition;
    return currentPositions;
  };
}
