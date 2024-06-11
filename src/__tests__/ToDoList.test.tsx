import * as React from 'react';
import {ContextApp} from "../context";

import {shallow} from "enzyme";
import {cleanup, render} from "@testing-library/react";

import {State} from "../types";
import ToDos from '../components/ToDos/ToDos';

describe('<ToDoList />',() => {

    afterEach(cleanup);

    const testState: State = {
      taskText: '',
      tasks: [
        { id: 1, text: 'new task', isCompleted: true },
        { id: 2, text: 'new task2', isCompleted: false }],
      filter: ''
    }

    const Wrapper = () => {
        return (
            <ContextApp.Provider value={{state: testState}}>
                <ToDos/>
            </ContextApp.Provider>
            )
    }

    it('renders the component without changes', () => {
        const component = shallow(<Wrapper/>);
        expect(component).toMatchSnapshot();
    });

    it('should render right tasks length', async () => {

        const {container} = render(<Wrapper/>);
        expect(container.querySelectorAll('li')).toHaveLength(testState.tasks.length);
    });

})
