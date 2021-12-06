import { useDrag } from 'react-dnd';
import React from 'react';
import { ItemTypes } from '../../DndItemTypes';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import { useStore } from '../../zustand/store';

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
  const { rank, team } = props;
  const updateTeamname = useStore((state) => state.updateTeamname);
  const swapPositions = useStore((state) => state.swapPositions);
  const dragReturn = useDrag({
    type: ItemTypes.TEAM,
    item: { team },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        return;
      }
      const dragItem = monitor.getItem();
      const dropResult = monitor.getDropResult();
      swapPositions({
        sourceTeamId: dragItem.team.id,
        targetTeamId: dropResult.team.id,
      });
    },
  });

  const classes = classNames(
    'col-md-12',
    'btn',
    'text-bold',
    calculatePositionCssClass(rank)
  );

  const onChange = (evt) => {
    updateTeamname({ team, updatedText: evt.target.value });
  };

  return (
    <div className={classes} style={{ cursor: 'pointer' }} ref={dragReturn[1]}>
      <ContentEditable
        onChange={onChange}
        role={'button'}
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
  team: PropTypes.object.isRequired,
};

export default Team;
