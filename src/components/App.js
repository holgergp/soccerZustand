import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import { Row, Grid } from 'react-bootstrap';
import LeagueTable from './LeagueTable';

class App extends Component {
  render() {
    return (
      <div className="index">
        <Grid>
          <Row>
            <LeagueTable />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
