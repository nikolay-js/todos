import React, { useReducer, Reducer, useEffect } from 'react';
import ToDos from './components/ToDos/ToDos';
import { ContextApp, initialState } from './context';
import { State, Action, TContextState } from './types';
import tasksReducer from './reducers/tasksReducer';

function App() {
  const [state, changeState] = useReducer<Reducer<State, Action>>(tasksReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(state.tasks))
  }, [state.tasks]);

  const ContextState: TContextState = {
    state,
    changeState
  };

  return (
    <ContextApp.Provider value={ContextState}>
      <ToDos />
    </ContextApp.Provider>
  );
}

export default App;
