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
    const sourcePosition = Positions._findTeamRank(
      sourceTeamId,
      currentPositions
    );
    const targetPosition = Positions._findTeamRank(
      targetTeamId,
      currentPositions
    );

    const sourceTeam = Positions._findTeam(sourceTeamId, currentPositions);
    const targetTeam = Positions._findTeam(targetTeamId, currentPositions);

    const newTarget = {
      rank: targetPosition,
      team: sourceTeam
    };

    const newSource = {
      rank: sourcePosition,
      team: targetTeam
    };

    currentPositions[targetPosition - 1] = newTarget;
    currentPositions[sourcePosition - 1] = newSource;
    return currentPositions;
  };

  static updateTeamname = (team, updatedText, currentPositions) => {
    const position = Positions._findTeamRank(team.id, currentPositions);

    //team.editing = false;
    team.name = updatedText;

    const enabledPosition = {
      position: position,
      team: team
    };

    currentPositions[position - 1] = enabledPosition;
    return currentPositions;
  };
}
