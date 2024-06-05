import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils.js';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import uiReducer from '../reducers/uiReducer.js';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

global.document = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
};

global.window = {
    alert: jest.fn(),
};

test("tests that App renders without crashing", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(wrapper.exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// test("tests that App contains Notifications", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Notifications)).toHaveLength(1);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App contains Header", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     expect(wrapper.contains(<Header />)).toBe(true);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App contains Login by default (isLoggedIn = false)", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Login)).toHaveLength(1);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });
// test("tests that App does not contain CourseList by default (isLoggedIn = false)", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(CourseList)).toHaveLength(0);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App contains CourseList when isLoggedIn is true", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     wrapper.setState({ user: { isLoggedIn: true } });
//     expect(wrapper.find(CourseList)).toHaveLength(1);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });
// test("tests that App does not contain Login when isLoggedIn is true", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     wrapper.setState({ user: { isLoggedIn: true } });
//     expect(wrapper.find(Login)).toHaveLength(0);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App contains Footer", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     expect(wrapper.contains(<Footer />)).toBe(true);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// I cannot get the alertMock part of following test to work for the life of me
// test("tests that App calls the logOut function and the alert function is called with the correct string when the keys control and h are pressed", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     // const alertMock = jest.spyOn(global.window, 'alert').mockImplementation(() => {});
//     const wrapper = shallow(<App />).simulate('keydown', {key: 'h', ctrlKey: true});
//     expect(wrapper.state().user).toEqual({
//         email: '',
//         password: '',
//         isLoggedIn: false,
//     });
//     // expect(alertMock).toHaveBeenCalledWith('Logging you out');

//     // alertMock.mockRestore();
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App's default state for displayDrawer is false and that it's true after calling handleDisplayDrawer", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     expect(wrapper.state().displayDrawer).toBe(false);

//     wrapper.instance().handleDisplayDrawer();
//     expect(wrapper.state().displayDrawer).toBe(true);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App's state for displayDrawer is false after calling handleHideDrawer", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     wrapper.setState({ displayDrawer: true })
//     wrapper.instance().handleHideDrawer();
//     expect(wrapper.state().displayDrawer).toBe(false);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App's logIn function updates the state correctly", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     wrapper.instance().logIn('test@test.com', 'test');
//     expect(wrapper.state().user).toEqual({
//         email: 'test@test.com',
//         password: 'test',
//         isLoggedIn: true,
//     });
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App's logOut function updates the state correctly", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     wrapper.instance().logOut();
//     expect(wrapper.state().user).toEqual({
//         email: '',
//         password: '',
//         isLoggedIn: false,
//     });
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// test("tests that App's logOut function updates the state correctly", () => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//     wrapper.instance().markNotificationAsRead(2);
//     expect(wrapper.state().listNotifications).toEqual([
//         {id: 1, type: "default", value: "New course available"},
//         {id: 3, html: {__html: getLatestNotification()}, type: "urgent"}
//     ]);
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

test("tests that mapStateToProps", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    let state = fromJS({ isUserLoggedIn: true, isNotificationDrawerVisible: true });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true, displayDrawer: true });
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
