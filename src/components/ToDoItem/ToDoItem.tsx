import React, { FC } from 'react';

import './ToDoItem.css';

interface ToDoItemProps {
  text: string;
  isCompleted: boolean;
  id: number;
  completeTask: (id: number) => void
}

const ToDoItem: FC<ToDoItemProps> = ({ text, isCompleted, id, completeTask }) => (
  <li className="todo-item">
    <label>
      <input className="checkbox" type="checkbox" defaultChecked={isCompleted} />
      <span onClick={() => completeTask(id)} className="fake-checkbox"></span>
    </label>
    <span className={isCompleted ? 'completed' : ''}>{text}</span>
  </li>
);

export default ToDoItem;
