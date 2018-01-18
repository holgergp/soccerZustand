import React, { Component } from 'react';
import './App.css';
import LeagueTable from './LeagueTable';

class App extends Component {
  render() {
    return (
      <div className="index">
        <div className="container">
          <div className="row">
            <LeagueTable  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
