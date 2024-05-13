import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login.js';

test("tests that Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that Login contains 2 input tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
});

test("tests that Login contains 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
});
