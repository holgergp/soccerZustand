export default class Positions {
  static _findTeamRank = (teamId, positions) => {
    const zeroBasedIndex =  positions.findIndex(position => position.team.id === teamId);
    return zeroBasedIndex + 1;
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
    let clonedPositions = currentPositions.slice();

    const sourceRank = Positions._findTeamRank(sourceTeamId, clonedPositions);
    const targetRank = Positions._findTeamRank(targetTeamId, clonedPositions);

    const sourceTeam = Positions._findTeam(sourceTeamId, clonedPositions);
    const targetTeam = Positions._findTeam(targetTeamId, clonedPositions);

    const newTarget = {
      team: sourceTeam
    };

    const newSource = {
      team: targetTeam
    };

    clonedPositions[targetRank - 1] = newTarget;
    clonedPositions[sourceRank - 1] = newSource;
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

    const updatedPosition = {
      team
    };

    clonedPositions[teamRank - 1] = updatedPosition;
    return clonedPositions;
  };
}
