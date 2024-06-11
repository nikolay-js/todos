import React, { useContext, useEffect } from 'react';
import ToDoInput from '../ToDoInput/ToDoInput';

import './ToDos.css'
import ToDoList from '../ToDoList/ToDoList';
import { ContextApp, initialState } from '../../context';
import { ITask } from '../../types';
import Footer from '../Footer/Footer';
import { add, changeText, remove, complete, change } from '../../reducers/tasksReducer';

const ToDos: React.FC = () => {
  const { state = initialState, changeState } = useContext(ContextApp);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(state.tasks));
  }, [state.tasks])

  const isTasksExist = state.tasks && state.tasks.length > 0;

  const handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    changeText(value)(changeState);
  }

  const addTask = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (state.taskText && state.taskText.length > 3 && (!Boolean(key) || key === 'Enter')) {
      const task = {
        id: Date.now(),
        text: state.taskText,
        isCompleted: false,
      }
      add(task)(changeState);
      changeText('')(changeState);
    }
  }

  const removeTask = () => {
    remove()(changeState);
  }

  const completeTask = (id: number) => {
    complete(id)(changeState);
  }

  const changeFilters = (activeFilter: string) => {
    change(activeFilter)(changeState);
  }

  const filterTasks = (tasks: ITask[] = [], activeFilter: string = '') => {
    switch (activeFilter) {
      case 'completed':
        return tasks?.filter(task => task.isCompleted);
      case 'active':
        return tasks?.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }

  const getActiveTasksCounter = (tasks: ITask[] = []) => tasks.filter(task => !task.isCompleted).length;
  const filteredTasks = filterTasks(state.tasks, state.filter);
  const taskCounter = getActiveTasksCounter(state.tasks);

  return (
    <div className="todo-wrapper">
      <h1 className="todo__title">todos</h1>
      <ToDoInput onKeyPress={addTask} onChange={handleInputChange} value={state.taskText} />
      {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} />}
      {isTasksExist && <Footer changeFilter={changeFilters} amount={taskCounter} activeFilter={state.filter} removeTask={removeTask} />}
    </div>
  );
};

export default ToDos;
