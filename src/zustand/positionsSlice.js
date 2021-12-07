import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
} from '../components/LeagueTable/Positions';
const initialState = {
  positions: undefined,
  loadingCompleted: false,
};

export const positionSlice = (set) => ({
  ...initialState,
  setPositions: (positions) => {
    set(() => ({ positions }));
  },
  swapPositions: (action) => {
    set((state) => ({
      positions: recalculateSwappedPositions(
        action.sourceTeamId,
        action.targetTeamId,
        state.positions
      ),
    }));
  },
  updateTeamname: (action) => {
    set((state) => ({
      positions: recalculatePositionsWithRenamedTeam(
        action.team,
        action.updatedText,
        state.positions
      ),
    }));
  },
});
