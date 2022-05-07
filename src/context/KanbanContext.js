import { createContext, useContext, useReducer } from 'react';
import kanbanData from '../data/kanban-data';
const KanbanContext = createContext();

const initialState = {
  coords: kanbanData.coords,
  filter: kanbanData.filter,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_COORD':
      const { coordId, newColumn } = action;
      const newCoords = [...state.coords.map((coord) => {
        if (coord.id === coordId) {
          return { ...coord, column: newColumn }
        } else {
          return coord
        }
      })];

      return {
        ...state,
        coords: newCoords,
      };

    case 'FILTER_COORD':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      throw new Error();
  }
}

export const useKanbanContext = () => {
  return useContext(KanbanContext);
}

export function KanbanProvider({ children }) {
  // const [kanbanState, setKanbakState] = useState(kanbanData);

  const [kanbanState, kanbanDispatch] = useReducer(reducer, initialState);

  return (
    <KanbanContext.Provider value={{ kanbanState, kanbanDispatch }}>
      {children}
    </KanbanContext.Provider>
  );
}

export default KanbanContext;
