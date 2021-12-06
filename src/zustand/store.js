import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
} from '../components/LeagueTable/Positions';
import create from 'zustand';
import { SAMPLE_LEAGUE_TABLE } from '../components/LeagueTable/SampleData';
import { devtools } from 'zustand/middleware';
import { getSampleData } from '../api/leagueTableApi';

const initialState = {
  positions: SAMPLE_LEAGUE_TABLE,
  loadingCompleted: false,
};

export const useStore = create(
  devtools((set) => ({
    ...initialState,
    loadPositions: async () => {
      const positions = await getSampleData();
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
