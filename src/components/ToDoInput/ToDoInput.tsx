import React, { FC } from 'react';

import './ToDoInput.css';

interface ToDoInputProps {
  onKeyPress: ({ key }: any) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
}

const ToDoInput: FC<ToDoInputProps> = ({ value, onChange, onKeyPress }) => {
  return (
    <div className="todo-input-wrapper">
      <i
        className={`todo-input__mark${(value && value.length > 3) ? ' todo-input__mark--plus' : ''}`}
        onClick={onKeyPress}
      >{(value && value.length > 3) ? '+' : '^'}
      </i>
      <input
        className="todo-input"
        placeholder="What needs to be done?"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default ToDoInput;
