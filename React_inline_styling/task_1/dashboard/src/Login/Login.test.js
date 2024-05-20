import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login.js';
import { StyleSheetTestUtils } from 'aphrodite';
import '../../config/setupTests';

test("tests that Login renders without crashing", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Login contains 2 input tags", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Login contains 2 label tags", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
