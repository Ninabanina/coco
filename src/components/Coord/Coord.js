import React from 'react';
import styles from './Coord.module.scss';
import { Draggable } from 'react-beautiful-dnd';

const Coord = ({ coord, index }) => {
  return (
    <Draggable draggableId={coord.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${styles.container} ${
            snapshot.isDragging ? styles.isDragging : styles.notDragging
          }`}
        >
          <h3 className={styles.title}>{coord.content}</h3>
        </div>
      )}
    </Draggable>
  );
};

export default Coord;