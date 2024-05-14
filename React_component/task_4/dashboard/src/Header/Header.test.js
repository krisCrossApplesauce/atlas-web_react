import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

test("tests that Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that Header contains img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
});

test("tests that Header contains h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').exists()).toBe(true);
});
