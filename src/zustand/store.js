import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
} from '../components/LeagueTable/Positions';
import create from 'zustand';
import { SAMPLE_LEAGUE_TABLE } from '../components/LeagueTable/SampleData';
import { devtools } from 'zustand/middleware';

const initialState = {
  positions: SAMPLE_LEAGUE_TABLE,
  loadingCompleted: false,
};

export const useStore = create(
  devtools((set) => ({
    ...initialState,
    swapPositions: (action) => {
      console.log('action', action);
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
