import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

const user = {
    email: '',
    password: '',
    isLoggedIn: false,
};

const user2 = {
    email: 'test@test.com',
    password: '123',
    isLoggedIn: true,
};

const logOut = jest.fn();

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
    const wrapper = mount(<Header />);
    expect(wrapper.find('section').exists()).toBe(false);
    wrapper.unmount();
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Header contains logoutSection when the context's user has non-empty values for email and password and isLoggedIn's value is true", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = mount(
        <AppContext.Provider value={{ user: user2, logOut }}>
            <Header />
        </AppContext.Provider>
    );
    expect(wrapper.find('section').exists()).toBe(true);
    wrapper.unmount();
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Header's logout link works", () => {
    StyleSheetTestUtils.suppressStyleInjection();

    const CONSOLE_FAIL_TYPES = ['error', 'warn'];
    const stupidWarningImGonnaOverride = "Warning: findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node";
    CONSOLE_FAIL_TYPES.forEach((type) => {
        console[type] = (message) => {
            if (message != stupidWarningImGonnaOverride) {
                throw new Error(message);
            } else {
                console.log("There's a warning, but it's really annoying so I've replaced it with this");
            }
        }
    });

    const logOutTest = jest.fn();
    const wrapper = mount(
        <AppContext.Provider value={{ user: user2, logOut: logOutTest }}>
            <Header />
        </AppContext.Provider>
    );
    wrapper.find('a').simulate('click'); // it literally makes no sense why this doesn't work because using find in Footer still works
    expect(logOutTest).toHaveBeenCalledTimes(1);
    wrapper.unmount();
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
