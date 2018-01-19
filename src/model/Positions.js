export default class Positions {
  static _findTeamRank = (teamId, positions) => {
    const zeroBasedIndex = positions.findIndex(team => team.id === teamId);
    return zeroBasedIndex + 1;
  };

  static _findTeam = (teamId, positions) => {
    return positions.find(team => team.id === teamId);
  };

  static recalculateSwappedPositions = (
    sourceTeamId,
    targetTeamId,
    currentPositions
  ) => {
    let clonedPositions = currentPositions.slice();

    const sourceRank = Positions._findTeamRank(sourceTeamId, clonedPositions);
    const targetRank = Positions._findTeamRank(targetTeamId, clonedPositions);

    const sourceTeam = Positions._findTeam(sourceTeamId, clonedPositions);
    const targetTeam = Positions._findTeam(targetTeamId, clonedPositions);

    clonedPositions[targetRank - 1] = sourceTeam;
    clonedPositions[sourceRank - 1] = targetTeam;
    return clonedPositions;
  };

  static recalculatePositionsWithRenamedTeam = (
    team,
    updatedText,
    currentPositions
  ) => {
    let clonedPositions = currentPositions.slice();

    const teamRank = Positions._findTeamRank(team.id, clonedPositions);

    //team.editing = false;
    team.name = updatedText;

    clonedPositions[teamRank - 1] = team;
    return clonedPositions;
  };
}
