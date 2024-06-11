import { createContext } from 'react'
import { State, TContextState } from '../types'

const lsTasks = JSON.parse(localStorage.getItem('todo-list') || '{}');
export const initialState: State = {
    taskText: '',
    tasks: Object.keys(lsTasks).length > 0 ? lsTasks : [],
    filter: 'all'
  }

export const ContextApp = createContext<Partial<TContextState>>({});
