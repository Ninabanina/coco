import { createContext, useContext, useState } from 'react';
import KanbanColumn from '../components/KanbanColumn';
import kanbanData from '../data/kanban-data';

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
    <>
      {kanbanData.columnOrder.map((columnId) => {
        const column = kanbanData.columns[columnId];
        const coords = column.coordIds.map(
          (coordId) => kanbanData.coords[coordId]
        );

        return <KanbanColumn key={column.id} column={column} coords={coords} />;
      })}
    </>
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
  const column = kanbanData.columns[source.droppableId];
  const newCoordIds = Array.from(column.coordIds);
  newCoordIds.splice(source.index, 1);
  newCoordIds.splice(destination.index, 0, draggableId);

  const newColumn = {
    ...column,
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
}

export default KanbanContext;
