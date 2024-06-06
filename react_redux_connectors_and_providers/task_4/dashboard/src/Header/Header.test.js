import React from 'react';
import { shallow } from 'enzyme';
import connectedHeader, { Header } from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';
// import AppContext from '../App/AppContext';

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
test("tests that Header does not contain logoutSection when the context value is default", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Header />);
    expect(wrapper.find('section').exists()).toBe(false);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Header contains logoutSection when the context's user has non-empty values for email and password and isLoggedIn's value is true", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const user = {
        email: 'test@test.com',
        password: '123',
        isLoggedIn: true,
    };
    const wrapper = shallow(<Header user={user} />);
    expect(wrapper.find('section').exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
