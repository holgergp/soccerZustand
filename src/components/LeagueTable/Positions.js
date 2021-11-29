const findTeamIndex = (teamId, positions) =>
  positions.findIndex((team) => team.id === teamId);

const findTeam = (teamId, positions) =>
  positions.find((team) => team.id === teamId);

export const recalculateSwappedPositions = (
  sourceTeamId,
  targetTeamId,
  currentPositions
) => {
  const clonedPositions = [...currentPositions];

  const [sourceInfo, targetInfo] = [sourceTeamId, targetTeamId].map((id) => ({
    index: findTeamIndex(id, clonedPositions),
    team: findTeam(id, clonedPositions),
  }));

  return currentPositions.map((pos, index) => {
    if (index === targetInfo.index) {
      return { ...sourceInfo.team };
    } else if (index === sourceInfo.index) {
      return { ...targetInfo.team };
    } else return { ...pos };
  });
};

export const recalculatePositionsWithRenamedTeam = (
  team,
  updatedText,
  currentPositions
) => {
  const teamIndex = findTeamIndex(team.id, currentPositions);

  return currentPositions.map((pos, index) => ({
    ...pos,
    name: teamIndex === index ? updatedText : pos.name,
  }));
};
