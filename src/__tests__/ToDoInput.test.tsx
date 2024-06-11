import * as React from 'react';
import { ContextApp } from "../context";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks';

import { useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";

import { State, TContextState } from "../types";
import ToDos from '../components/ToDos/ToDos';

describe('<ToDoInput />', () => {

  afterEach(cleanup);

  const testState: State = {
    taskText: 'new task',
    tasks: [],
    filter: ''
  }

  const { result } = renderHook(() => useReducer(tasksReducer, testState));
  const [state, changeState] = result.current;

  const ContextState: TContextState = {
    state,
    changeState
  };

  const wrapper =
    <ContextApp.Provider value={ContextState}>
      <ToDos />
    </ContextApp.Provider>;

  it('renders the component without changes', () => {
    const component = shallow(wrapper);
    expect(component).toMatchSnapshot();
  });

  it('should render right input value', async () => {
    const { container } = render(wrapper);
    const input = container.querySelector('input');

    if (input !== null) {
      expect(input.getAttribute('value')).toEqual(testState.taskText);
    }
  });

})
