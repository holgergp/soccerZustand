import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import LeagueTable from './LeagueTable/LeagueTable';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
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
