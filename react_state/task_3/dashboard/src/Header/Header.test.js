import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';

test("tests that Header renders without crashing", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Header contains img tag", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Header contains h1 tag", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// didn't include the tests for task 2 of react_state
