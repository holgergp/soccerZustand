import React, { Component } from 'react';
import Position from './Position';
import { DragDropContext } from 'react-dnd';

import _ from 'lodash';
import HTML5Backend from 'react-dnd-html5-backend';
import { SAMPLE_LEAGUE_TABLE } from './SampleData';

const findTeamPosition = (teamId, positions) => {
  const foundPosition = positions
    .filter(function(posIter) {
      return posIter.team.id === teamId;
    })
    .pop();

  return foundPosition.position;
};

const findTeam = (teamId, positions) => {
  const foundPosition = positions
    .filter(function(posIter) {
      return posIter.team.id === teamId;
    })
    .pop();

  return foundPosition.team;
};

class LeagueTable extends Component {
  defaultState = {
    positions: SAMPLE_LEAGUE_TABLE,
    newTeam: {}
  };

  constructor(props) {
    super(props);
    this.state = { ...this.getInitialState() };
  }

  getInitialState() {
    if (_.isUndefined(localStorage.state)) {
      return this.defaultState;
    }
    const localstate = JSON.parse(localStorage.state);

    if (_.isUndefined(localstate)) {
      return this.defaultState;
    }
    return localstate;
  }

  componentDidUpdate() {
    //unused params prevProps and prevState
    localStorage.state = JSON.stringify(this.state);
  }

  render() {
    const swapPositions = this.swapPositions;
    const updateTeamname = this.updateTeamname;

    const positionNodes = this.state.positions.map(posIter => (
      <Position
        position={posIter}
        key={posIter.position}
        swapPositions={swapPositions}
        updateTeamname={updateTeamname}
      />
    ));

    return (
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Ligatabelle zum Selberstecken</h3>
          </div>
          <div className="panel-body">{positionNodes}</div>
        </div>
      </div>
    );
  }

  swapPositions = (sourceTeamId, targetTeamId) => {
    let updatedPositions = this.state.positions;

    const sourcePosition = findTeamPosition(
      sourceTeamId.sourceId,
      updatedPositions
    );
    const targetPosition = findTeamPosition(targetTeamId, updatedPositions);

    const sourceTeam = findTeam(sourceTeamId.sourceId, updatedPositions);
    const targetTeam = findTeam(targetTeamId, updatedPositions);

    const newTarget = {
      position: targetPosition,
      team: sourceTeam
    };

    const newSource = {
      position: sourcePosition,
      team: targetTeam
    };

    updatedPositions[targetPosition - 1] = newTarget;
    updatedPositions[sourcePosition - 1] = newSource;

    this.setState({
      positions: updatedPositions,
      newTeam: {}
    });
  }

  updateTeamname = (team, updatedText) => {
    const positions = this.state.positions;

    const position = findTeamPosition(team.id, positions);

    //team.editing = false;
    team.name = updatedText;

    const enabledPosition = {
      position: position,
      team: team
    };

    positions[position - 1] = enabledPosition;

    this.setState({
      positions: positions,
      newTeam: {}
    });
  }
}

export default DragDropContext(HTML5Backend)(LeagueTable);
