import React, { Component } from 'react';
import Position from './Position';
import Positions from '../model/Positions';
import { DragDropContext } from 'react-dnd';

import _ from 'lodash';
import HTML5Backend from 'react-dnd-html5-backend';
import { SAMPLE_LEAGUE_TABLE } from '../constants/SampleData';
import { Panel, Col } from 'react-bootstrap';

export class LeagueTable extends Component {
  defaultState = {
    positions: SAMPLE_LEAGUE_TABLE,
    newTeam: {}
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.swapPositions = this.swapPositions.bind(this);
    this.updateTeamname = this.updateTeamname.bind(this);
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

  render = () => {
    const positionNodes = this.state.positions.map((position, index) => (
      <Position
        team={position.team}
        rank={index + 1}
        key={index}
        swapPositions={this.swapPositions}
        updateTeamname={this.updateTeamname}
      />
    ));

    return (
      <Col md={6}>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              Ligatabelle zum Selberstecken
            </Panel.Title>
          </Panel.Heading>
          <div className="panel-body">{positionNodes}</div>
        </Panel>
      </Col>
    );
  };

  swapPositions = (sourceTeamId, targetTeamId) => {
    this.setState({
      positions: Positions.recalculateSwappedPositions(
        sourceTeamId,
        targetTeamId,
        this.state.positions
      ),
      newTeam: {}
    });
  };

  updateTeamname = (team, updatedText) => {
    this.setState({
      positions: Positions.recalculatePositionsWithRenamedTeam(
        team,
        updatedText,
        this.state.positions
      )
    });
  };
}

export default DragDropContext(HTML5Backend)(LeagueTable);
