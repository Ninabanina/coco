import React from 'react';
import styles from './KanbanColumn.module.scss';
import Coord from '../Coord';
import { Droppable } from 'react-beautiful-dnd';

const KanbanColumn = ({ column, coords }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className={styles.tasklist}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {coords.map((coord, index) => (
              <Coord key={coord.id} coord={coord} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;
