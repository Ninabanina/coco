import React from 'react';
import styles from './Kanban.module.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanContext from '../../context/KanbanContext';
import KanbanColumn from '../KanbanColumn';
import { COLUMN } from '../../data/kanban-data';
import supabase from "../../supabaseClient"

import { Layout } from 'antd';

const Kanban = () => {
  // const { kanbanData, kanbanDispatch } = useKanbanContext();
  const { Content } = Layout;
  const onDragEnd = (result, kanbanData, kanbanDispatch) => {

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

    // TODO Moving within the same column
    // if (source.droppableId === destination.droppableId) {
    // }


    supabase
      .from('coords')
      .update({ column: destination.droppableId })
      .match({ id: parseInt(draggableId, 10) })
      .then(data => console.log(data))

    kanbanDispatch({ type: 'MOVE_COORD', coordId: draggableId, newColumn: destination.droppableId });
  };

  return (
    <KanbanContext.Consumer>
      {({ kanbanData, kanbanDispatch }) => {
        return (
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, kanbanData, kanbanDispatch)}
          >
            <Content>
              <div className={styles.kanban__container}>
                <KanbanColumn title={COLUMN.BACKLOG} />
                <KanbanColumn title={COLUMN.DOING} />
                <KanbanColumn title={COLUMN.COMPLETE} />
              </div>
            </Content>
          </DragDropContext>
        );
      }}
    </KanbanContext.Consumer>
  );
};

export default Kanban;
