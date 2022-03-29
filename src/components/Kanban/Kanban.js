import React from 'react';
import styles from './Kanban.module.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanContext from '../../context/KanbanContext';

import { Column } from '../../context/KanbanContext';
import { Layout } from 'antd';

const Kanban = () => {
  const { Content } = Layout;

  const onDragEnd = (result, kanbanData, setKanbanData) => {
    console.table(kanbanData.columns);
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    // check if the location of draggable item changed or not
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // create a new coord id array after the drag and drop
    const start = kanbanData.columns[source.droppableId];
    const finish = kanbanData.columns[destination.droppableId];

    // Moving within the same column
    if (start === finish) {
      const newCoordIds = Array.from(start.coordIds);
      newCoordIds.splice(source.index, 1);
      newCoordIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        coordIds: newCoordIds,
      };

      const newKanbanData = {
        ...kanbanData,
        columns: {
          ...kanbanData.columns,
          [newColumn.id]: newColumn,
        },
      };
      console.table(newKanbanData.columns);
      setKanbanData(newKanbanData);
      return;
    }

    // Moving from one column to another
    const startCoordIds = Array.from(start.coordIds);
    startCoordIds.splice(source.index, 1);
    const newStart = {
      ...start,
      coordIds: startCoordIds,
    };

    const finishCoordIds = Array.from(finish.coordIds);
    finishCoordIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      coordIds: finishCoordIds,
    };

    const newKanbanData = {
      ...kanbanData,
      columns: {
        ...kanbanData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setKanbanData(newKanbanData);
  };

  return (
    <KanbanContext.Consumer>
      {([kanbanData, setKanbanData]) => {
        return (
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, kanbanData, setKanbanData)}
          >
            <Content>
              <div className={styles.kanban__container}>
                <Column />
              </div>
            </Content>
          </DragDropContext>
        );
      }}
    </KanbanContext.Consumer>
  );
};

export default Kanban;
