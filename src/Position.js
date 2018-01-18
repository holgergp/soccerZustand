import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Team from './Team';
import PropTypes from 'prop-types';
import { ItemTypes } from './DndItemTypes';

const positionTarget = {
  drop(props) {
    //unused params monitor, component
    return props.position.team;
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    item: monitor.getItem()
  };
}

class Position extends Component {
  static propTypes = {
    swapPositions: PropTypes.func.isRequired,
    updateTeamname: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired
  };

  render() {
    const position = this.props.position;
    const team = this.props.position.team;
    const updateTeamname = this.props.updateTeamname;
    const swapPositions = this.props.swapPositions;
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <span>
          <Team
            team={team}
            positionNumber={position.position}
            updateTeamname={updateTeamname}
            swapPositions={swapPositions}
          />
        </span>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TEAM, positionTarget, collect)(Position);
