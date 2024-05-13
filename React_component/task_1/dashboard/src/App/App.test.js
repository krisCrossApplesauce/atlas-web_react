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

test("tests that App calls the logOut function (which is passed as a prop) and the alert function is called with the correct string when the keys control and h are pressed", () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(global.window, 'alert').mockImplementation(() => {});

    const wrapper = shallow(<App logOut={logOutMock} />);

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });

    global.document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
});
