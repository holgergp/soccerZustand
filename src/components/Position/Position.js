import React from 'react';
import { useDrop } from 'react-dnd';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import { ItemTypes } from '../../DndItemTypes';

const Position = (props) => {
  const team = props.team;
  const rank = props.rank;
  const updateTeamname = props.updateTeamname;
  const swapPositions = props.swapPositions;
  const dropReturn = useDrop({
    accept: ItemTypes.TEAM,
    drop: () => ({ team }),
  });
  return (
    <div ref={dropReturn[1]}>
      <Team
        team={team}
        rank={rank}
        updateTeamname={updateTeamname}
        swapPositions={swapPositions}
      />
    </div>
  );
};

Position.propTypes = {
  rank: PropTypes.number.isRequired,
  swapPositions: PropTypes.func.isRequired,
  team: PropTypes.object.isRequired,
  updateTeamname: PropTypes.func.isRequired,
};

export default Position;
