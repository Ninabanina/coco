import { createContext, useContext, useReducer, useEffect } from 'react';
import kanbanData from '../data/kanban-data';
import supabase from '../supabaseClient'

const KanbanContext = createContext();

const initialState = {
  coords: [],
  filter: kanbanData.filter,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COORDS':
      const { coords } = action
      return { ...state, coords: coords }

    case 'MOVE_COORD':
      const { coordId, newColumn } = action;
      const newCoords = [...state.coords.map((coord) => {
        if (coord.id.toString() === coordId.toString()) {
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
      const { filter } = state;
      if (filter === action.filter) {
        return {
          ...state,
          filter: '',
        }
      } else {
        return {
          ...state,
          filter: action.filter,
        }
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
  useEffect(() => {
    supabase
      .from('coords')
      .select("*")
      .then(data => {
        kanbanDispatch({ type: 'SET_COORDS', coords: data.body })
      })
  }, []);

  useEffect(() => {
    supabase
      .from('*')
      .on('*', payload => {
        let newCoord = payload.new;
        kanbanDispatch({ type: 'MOVE_COORD', coordId: newCoord.id, newColumn: newCoord.column })
      })
      .subscribe()
    return function cleanup() {
      supabase.removeAllSubscriptions()
    }
  }, []);
  const [kanbanState, kanbanDispatch] = useReducer(reducer, initialState);

  return (
    <KanbanContext.Provider value={{ kanbanState, kanbanDispatch }}>
      {children}
    </KanbanContext.Provider>
  );
}

export default KanbanContext;
