export default class Positions {
  static _findTeamPosition = (teamId, positions) => {
    const foundPosition = positions
      .filter(function(posIter) {
        return posIter.team.id === teamId;
      })
      .pop();

    return foundPosition.position;
  };

  static _findTeam = (teamId, positions) => {
    const foundPosition = positions
      .filter(function(posIter) {
        return posIter.team.id === teamId;
      })
      .pop();

    return foundPosition.team;
  };

  static recalculateSwappedPositions = (
    sourceTeamId,
    targetTeamId,
    currentPositions
  ) => {
    const sourcePosition = Positions._findTeamPosition(
      sourceTeamId,
      currentPositions
    );
    const targetPosition = Positions._findTeamPosition(targetTeamId, currentPositions);

    const sourceTeam = Positions._findTeam(sourceTeamId.sourceId, currentPositions);
    const targetTeam = Positions._findTeam(targetTeamId, currentPositions);

    const newTarget = {
      position: targetPosition,
      team: sourceTeam
    };

    const newSource = {
      position: sourcePosition,
      team: targetTeam
    };

    currentPositions[targetPosition - 1] = newTarget;
    currentPositions[sourcePosition - 1] = newSource;
    return currentPositions;
  };

  static updateTeamname = (team, updatedText, currentPositions) => {
    const position = Positions._findTeamPosition(team.id, currentPositions);

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
