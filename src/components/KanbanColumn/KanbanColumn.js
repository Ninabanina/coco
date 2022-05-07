import React from 'react';
import styles from './KanbanColumn.module.scss';
import Coord from '../Coord';
import { Droppable } from 'react-beautiful-dnd';
import { useKanbanContext } from '../../context/KanbanContext';

const KanbanColumn = ({ title }) => {
  const { kanbanState } = useKanbanContext();

  const filteredCoords = kanbanState.coords.filter((coord) => {
    if (!kanbanState.filter) return true;

    return coord.people.includes(kanbanState.filter);
  });

  return (
    <div className={styles.columnContainer}>
      <div key={title} className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <Droppable droppableId={title}>
          {(provided, snapshot) => (
            <div
              className={styles.tasklist}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {filteredCoords
                .filter(coord => coord.column === title)
                .map((coord, index) => (
                  <Coord key={coord.id} coord={coord} index={index} />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default KanbanColumn;
