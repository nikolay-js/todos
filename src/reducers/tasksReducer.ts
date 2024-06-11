import { ActionType, State, Action, ITask } from '../types';
import { initialState } from '../context';

const tasksReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return {
        ...state, tasks: [...state.tasks, {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        }]
      };
    case ActionType.TEXT_TASK: {
      return { ...state, taskText: action.payload };
    }
    case ActionType.REMOVE_TASK:
      return {
        ...state, tasks: [...state.tasks.filter(task => !task.isCompleted)]
      };
    case ActionType.COMPLETE_TASK:
      return {
        ...state, tasks: [...state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      })]
    };
    case ActionType.CHANGE_FILTER:
      return { ...state, filter: action.payload.activeFilter };
    default:
      return state;
  }
}

export const setTask = (task: ITask) => ({ type: ActionType.ADD_TASK, payload: task });
export const setText = (value: string) => ({ type: ActionType.TEXT_TASK, payload: value });
export const setRemove = () => ({ type: ActionType.REMOVE_TASK });
export const setComplete = (id: number) => ({ type: ActionType.COMPLETE_TASK, payload: { id } });
export const setFilter = (activeFilter: string) => ({ type: ActionType.CHANGE_FILTER, payload: { activeFilter } });

export const add = (task: ITask) => (changeState: any) => changeState(setTask(task));
export const changeText = (value: string) => (changeState: any) => changeState(setText(value));
export const remove = () => (changeState: any) => changeState(setRemove());
export const complete = (id: number) => (changeState: any) => changeState(setComplete(id));
export const change = (activeFilter: string) => (changeState: any) => changeState(setFilter(activeFilter));

export default tasksReducer;
