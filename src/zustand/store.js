import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
} from '../components/LeagueTable/Positions';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
  positions: undefined,
  loadingCompleted: false,
};

export const useStore = create(
  devtools((set) => ({
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
  }))
);
