import { createContext, useContext, useState } from 'react';
import KanbanColumn from '../components/KanbanColumn';
import kanbanData from '../data/kanban-data';

import styles from './KanbanContext.module.scss';

const KanbanContext = createContext();

export function KanbanProvider({ children }) {
  const [kanbanState, setKanbakState] = useState(kanbanData);
  return (
    <KanbanContext.Provider value={[kanbanState, setKanbakState]}>
      {children}
    </KanbanContext.Provider>
  );
}

export function Column() {
  const [kanbanData] = useContext(KanbanContext);
  return (
    <div className={styles.container}>
      {kanbanData.columnOrder.map((columnId) => {
        const column = kanbanData.columns[columnId];
        const coords = column.coordIds.map(
          (coordId) => kanbanData.coords[coordId]
        );

        return <KanbanColumn key={column.id} column={column} coords={coords} />;
      })}
    </div>
  );
}

export function onDragEnd(result, kanbanData, setKanbanData) {
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
}

export default KanbanContext;
