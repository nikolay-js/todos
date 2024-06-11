import {Dispatch} from "react";

// Store
export type Filter = string;

export interface ITask {
    id: number,
    text: string,
    isCompleted: boolean,
}

export interface State {
  taskText: string;
  tasks: ITask[];
  filter: Filter
}

// Actions
export enum ActionType {
  ADD_TASK = 'ADD_TASK',
  TEXT_TASK = 'TEXT_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_FILTER = 'CHANGE_FILTER'
}

interface IAddTaskAction {
    type: ActionType.ADD_TASK,
    payload: ITask,
}

interface ITextTaskAction {
    type: ActionType.TEXT_TASK,
    payload: string,
}

interface IRemoveTaskAction {
    type: ActionType.REMOVE_TASK,
}

interface ICompleteTaskAction {
    type: ActionType.COMPLETE_TASK,
    payload: {
        id: number,
    }
}

interface IChangeFilterAction {
    type: ActionType.CHANGE_FILTER,
    payload: {
        activeFilter: Filter,
    }
}

export type TaskActionTypes = IAddTaskAction | ITextTaskAction | IRemoveTaskAction | ICompleteTaskAction;
export type FilterActionType = IChangeFilterAction;

export type Action = TaskActionTypes | FilterActionType;

export type TContextState = {
  state: State;
  changeState: Dispatch<Action>
}
