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

export default KanbanContext;
