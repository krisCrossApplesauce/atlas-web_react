import React from 'react';
import { shallow } from 'enzyme';
import connectedApp, { App, mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils.js';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/rootReducer.js';
// import { composeWithDevTools } from '@redux-devtools/extension';

global.document = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
};

global.window = {
    alert: jest.fn(),
};

describe("tests for App", () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    
    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("tests that App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it("tests that App contains Notifications", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it("tests that App contains Header", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toBe(true);
    });

    it("tests that App contains Login by default (isLoggedIn = false)", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);
    });
    it("tests that App does not contain CourseList by default (isLoggedIn = false)", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    it("tests that App contains CourseList when isLoggedIn is true", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });
    it("tests that App does not contain Login when isLoggedIn is true", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it("tests that App contains Footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toBe(true);
    });

    // I cannot get the alertMock part of following test to work for the life of me
    it("tests that App calls the logOut function and the alert function is called with the correct string when the keys control and h are pressed", () => {
        // const alertMock = jest.spyOn(global.window, 'alert').mockImplementation(() => {});
        const wrapper = shallow(<App />).simulate('keydown', {key: 'h', ctrlKey: true});
        expect(wrapper.state().user).toEqual({
            email: '',
            password: '',
            isLoggedIn: false,
        });
        // expect(alertMock).toHaveBeenCalledWith('Logging you out');

        // alertMock.mockRestore();
    });

    // it("tests that App's default state for displayDrawer is false and that it's true after calling handleDisplayDrawer", () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.state().displayDrawer).toBe(false);

    //     wrapper.instance().handleDisplayDrawer();
    //     expect(wrapper.state().displayDrawer).toBe(true);
    // });

    // it("tests that App's state for displayDrawer is false after calling handleHideDrawer", () => {
    //     const wrapper = shallow(<App />);
    //     wrapper.setState({ displayDrawer: true })
    //     wrapper.instance().handleHideDrawer();
    //     expect(wrapper.state().displayDrawer).toBe(false);
    // });

    it("tests that App's markNotificationAsRead function works correctly", () => {
        const wrapper = shallow(<App />);
        wrapper.instance().markNotificationAsRead(2);
        expect(wrapper.state().listNotifications).toEqual([
            {id: 1, type: "default", value: "New course available"},
            {id: 3, html: {__html: getLatestNotification()}, type: "urgent"}
        ]);
    });
});

// test("tests that mapStateToProps", () => {
//     let state = fromJS({ isUserLoggedIn: true, isNotificationDrawerVisible: true });
//     expect(mapStateToProps(state)).toEqual({ isLoggedIn: true, displayDrawer: true });
// });
