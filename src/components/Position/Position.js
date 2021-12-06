import React from 'react';
import { useDrop } from 'react-dnd';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import { ItemTypes } from '../../DndItemTypes';

const Position = (props) => {
  const team = props.team;
  const rank = props.rank;
  const dropReturn = useDrop({
    accept: ItemTypes.TEAM,
    drop: () => ({ team }),
  });
  return (
    <div ref={dropReturn[1]}>
      <Team team={team} rank={rank} />
    </div>
  );
};

Position.propTypes = {
  rank: PropTypes.number.isRequired,
  team: PropTypes.object.isRequired,
};

export default Position;
