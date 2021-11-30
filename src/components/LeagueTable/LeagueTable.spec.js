import React from 'react';
import '../setupEnzymeTests';
import LeagueTable from './LeagueTable';
import '../localstorageMock';
import * as leagueTableApi from '../../api/leagueTableApi';
import { SAMPLE_LEAGUE_TABLE } from './SampleData';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, waitFor, screen } from '@testing-library/react';
jest.mock('../../api/leagueTableApi');

describe('League Table should', () => {
  const queryClient = new QueryClient();
  it('render 18 clubs', async () => {
    leagueTableApi.getSampleData.mockResolvedValue(SAMPLE_LEAGUE_TABLE);

    render(
      <QueryClientProvider client={queryClient}>
        <LeagueTable />
      </QueryClientProvider>
    );
    await waitFor(() => screen.getByRole('heading'));

    expect(screen.getAllByRole('button')).toHaveLength(18);
  });
});
