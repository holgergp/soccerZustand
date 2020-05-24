const findTeamRank = (teamId, positions) => {
  const zeroBasedIndex = positions.findIndex(team => team.id === teamId);
  return zeroBasedIndex + 1;
};

const findTeam = (teamId, positions) => {
  return positions.find(team => team.id === teamId);
};

export const recalculateSwappedPositions = (
  sourceTeamId,
  targetTeamId,
  currentPositions
) => {
  const clonedPositions = currentPositions.slice();

  const sourceRank = findTeamRank(sourceTeamId, clonedPositions);
  const targetRank = findTeamRank(targetTeamId, clonedPositions);

  const sourceTeam = findTeam(sourceTeamId, clonedPositions);
  const targetTeam = findTeam(targetTeamId, clonedPositions);

  clonedPositions[targetRank - 1] = sourceTeam;
  clonedPositions[sourceRank - 1] = targetTeam;
  return clonedPositions;
};

export const recalculatePositionsWithRenamedTeam = (
  team,
  updatedText,
  currentPositions
) => {
  const clonedPositions = currentPositions.slice();

  const teamRank = findTeamRank(team.id, clonedPositions);

  team.name = updatedText;

  clonedPositions[teamRank - 1] = team;
  return clonedPositions;
};
