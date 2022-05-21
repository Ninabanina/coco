import React from 'react';
import styles from './Coord.module.scss';
import { Draggable } from 'react-beautiful-dnd';

const Coord = ({ coord, index }) => {
  return (
    <Draggable draggableId={coord.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${styles.container} ${snapshot.isDragging ? styles.isDragging : styles.notDragging
            }`}
        >
          <h3 className={styles.title}>{coord.content}</h3>
          <ul className={styles.people__list}>
            {coord.people.map((people, index) => (
              <li
                className={styles.people__list__item}
                key={`coord-${people}${index}`}
              >
                {people}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Draggable>
  );
};

export default Coord;
