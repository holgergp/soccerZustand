import { useDrag } from 'react-dnd';
import React from 'react';
import { ItemTypes } from '../../DndItemTypes';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

const calculatePositionCssClass = (positionNumber) => {
  if (positionNumber === 1) {
    return 'tabellenfuehrerClass tabelleClass';
  }
  if (positionNumber <= 3) {
    return 'championsLeagueClass tabelleClass';
  }
  if (positionNumber <= 6) {
    return 'europaLeagueClass tabelleClass';
  }
  if (positionNumber <= 15) {
    return 'mittelfeldClass tabelleClass';
  }
  if (positionNumber === 16) {
    return 'relegationClass tabelleClass';
  } else {
    return 'abstiegClass tabelleClass';
  }
};

const Team = (props) => {
  const { rank, team, updateTeamname } = props;

  const dragReturn = useDrag({
    item: { team, type: ItemTypes.TEAM },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        return;
      }
      const dragItem = monitor.getItem();
      const dropResult = monitor.getDropResult();
      props.swapPositions(dragItem.team.id, dropResult.team.id);
    },
  });

  const classes = classNames(
    'col-md-12',
    'btn',
    'text-bold',
    calculatePositionCssClass(rank)
  );

  const onChange = (evt) => {
    updateTeamname(team, evt.target.value);
  };

  return (
    <div className={classes} style={{ cursor: 'pointer' }} ref={dragReturn[1]}>
      <ContentEditable
        onChange={onChange}
        className="textPointer"
        html={team.name}
        autoFocus={true}
        maxLength={200}
        disabled={!team.editing}
      />
    </div>
  );
};

Team.propTypes = {
  rank: PropTypes.number.isRequired,
  swapPositions: PropTypes.func.isRequired,
  team: PropTypes.object.isRequired,
  updateTeamname: PropTypes.func.isRequired,
};

export default Team;
