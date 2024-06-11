import tasksReducer from "../reducers/tasksReducer";
import { ActionType, Action, State, ITask } from "../types";

describe('tasksReducer', () => {
  it('returns new state for "ADD_TASK" type', () => {
    const initialState: State = { taskText: '', tasks: [], filter: '' };
    const updateAction: Action = {
      type: ActionType.ADD_TASK, payload: {
        id: 1,
        text: 'new task',
        isCompleted: false,
      }
    };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({ taskText: '', tasks: [{ id: 1, text: 'new task', isCompleted: false }], filter: '' });
  });

  it('returns new state for "TEXT_TASK" type', () => {
    const initialState: State = { taskText: '', tasks: [], filter: '' };
    const updateAction: Action = { type: ActionType.TEXT_TASK, payload: 'new task' };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({ taskText: 'new task', tasks: [], filter: '' });
  });

  it('returns new state for "REMOVE_TASK" type', () => {
    const tasks: ITask[] = [
      { id: 1, text: 'new task', isCompleted: false },
      { id: 2, text: 'new task2', isCompleted: true }
    ];
    const initialState: State = { taskText: '', tasks, filter: '' };
    const updateAction: Action = { type: ActionType.REMOVE_TASK };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({ taskText: '', tasks: [{ id: 1, text: 'new task', isCompleted: false }], filter: '' });
  });

  it('returns new state for "COMPLETE_TASK" type', () => {
    const tasks: ITask[] = [
      { id: 1, text: 'new task', isCompleted: false },
      { id: 2, text: 'new task2', isCompleted: false }
    ];
    const initialState: State = { taskText: '', tasks, filter: '' };
    const updateAction: Action = { type: ActionType.COMPLETE_TASK, payload: { id: 1 } };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      taskText: '',
      tasks: [
        { id: 1, text: 'new task', isCompleted: true },
        { id: 2, text: 'new task2', isCompleted: false }],
      filter: ''
    });
  });

  it('returns new state for "CHANGE_FILTER" type', () => {
    const initialState: State = { taskText: '', tasks: [], filter: '' };
    const updateAction: Action = { type: ActionType.CHANGE_FILTER, payload: { activeFilter: 'Active' } };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({ taskText: '', tasks: [], filter: 'Active' });
  });
})

