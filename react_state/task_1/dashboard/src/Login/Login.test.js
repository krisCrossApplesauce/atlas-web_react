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
    expect(wrapper.find('input')).toHaveLength(3);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Login contains 2 label tags", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Login's submit button is disabled by default", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Login />);
    // wrapper.find('submit').simulate('click');
    expect(wrapper.state().enableSubmit).toBe(false);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Login's submit button is enabled after changing the values of the two inputs", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Login />);
    wrapper.find('input').first().simulate('change', { target: { value: 'hello@world.com' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'password' } });
    expect(wrapper.state().enableSubmit).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
