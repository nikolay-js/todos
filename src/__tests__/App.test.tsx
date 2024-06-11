import * as React from 'react';
import { shallow } from 'enzyme';

import App from "../App";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe('<App />', () => {

  afterEach(cleanup);

  it('renders the component without changes', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it("renders the heading", () => {
    const { container } = render(<App />);
    const h1 = container.querySelector('h1');
    if (h1 !== null) {
      expect(h1.textContent).toEqual('todos');
    };
  });

  it('should render right input value', async () => {
    const { container } = render(<App />);
    const input = container.querySelector('input');
    const button = container.querySelector('button');

    if (input !== null && button !== null) {
      expect(input.getAttribute('value')).toEqual('');
      act(() => {
        fireEvent.change(input, {
          target: {
            value: 'test'
          },
        })
      })
      await waitFor(() => {
        expect(input.getAttribute('value')).toEqual('test');
      });
      act(() => {
        fireEvent.click(button)
      })
      await waitFor(() => {
        expect(input.getAttribute('value')).toEqual('');
      });
    };
  });
})
