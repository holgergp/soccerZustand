import React, { useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Row, Container } from 'react-bootstrap';
import LeagueTable from './LeagueTable/LeagueTable';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useStore } from '../zustand/store';

const queryClient = new QueryClient();

const App = () => {
  const loadPositions = useStore((state) => state.loadPositions);
  const load = useCallback(async () => {
    await loadPositions();
  }, [loadPositions]);
  useEffect(() => {
    load();
  }, [load]);
  return (
    <div className="index">
      <Container>
        <Row>
          <QueryClientProvider client={queryClient}>
            <LeagueTable />
          </QueryClientProvider>
        </Row>
      </Container>
    </div>
  );
};

export default App;
