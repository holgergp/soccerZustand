import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Team from './Team';
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants/DndItemTypes';

const positionTarget = {
  drop(props) {
    return props.team;
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    item: monitor.getItem()
  };
};

class Position extends Component {
  static propTypes = {
    swapPositions: PropTypes.func.isRequired,
    updateTeamname: PropTypes.func.isRequired,
    rank: PropTypes.number.isRequired,
    team: PropTypes.object.isRequired
  };

  render() {
    const team = this.props.team;
    const rank = this.props.rank;
    const updateTeamname = this.props.updateTeamname;
    const swapPositions = this.props.swapPositions;
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <span>
          <Team
            team={team}
            rank={rank}
            updateTeamname={updateTeamname}
            swapPositions={swapPositions}
          />
        </span>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TEAM, positionTarget, collect)(Position);
