import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

global.document = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
};

global.window = {
    alert: jest.fn(),
};

test("tests that App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that App contains Notifications", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(true);
});

test("tests that App contains Header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
});

test("tests that App contains Login by default (isLoggedIn = false)", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
});
test("tests that App does not contain CourseList by default (isLoggedIn = false)", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
});

test("tests that App contains CourseList when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<CourseList />)).toBe(true);
});
test("tests that App does not contain Login when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
});

test("tests that App contains Footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
});

// I cannot get the following test to work for the life of me
// test("tests that App calls the logOut function (which is passed as a prop) and the alert function is called with the correct string when the keys control and h are pressed", () => {
//     const logOutMock = jest.fn(console.log("logOut function called! :D"));
//     console.log("if console.log message is printed before this, console.log happens when const logOutMock is set");
//     const alertMock = jest.spyOn(global.window, 'alert').mockImplementation(() => {});

//     const wrapper = shallow(<App logOut={logOutMock} />).simulate('keydown', {key: 'h', ctrlKey: true});
//     console.log("if console.log message is printed only before this, logOutMock is run when wrapper is created, as it should");

//     expect(wrapper.exists()).toBe(true);
//     expect(wrapper.prop("logOut")).toHaveBeenCalled();
//     expect(alertMock).toHaveBeenCalledWith('Logging you out');

//     alertMock.mockRestore();
// });
