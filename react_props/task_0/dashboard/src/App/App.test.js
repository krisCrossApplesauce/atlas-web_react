import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test("tests that App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
});
