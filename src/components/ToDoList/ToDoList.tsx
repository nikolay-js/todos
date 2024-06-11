import React, { FC } from 'react';

import ToDoItem from '../ToDoItem/ToDoItem';
import { ITask } from '../../types';

interface ToDoListProps {
  tasksList: ITask[];
  completeTask: (id: number) => void
}

const ToDoList: FC<ToDoListProps> = ({ tasksList, completeTask }) => (
  <ul>
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem completeTask={completeTask} id={id} key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

export default ToDoList;
