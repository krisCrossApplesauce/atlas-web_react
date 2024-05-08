import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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

test("tests that App contains Login", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
});

test("tests that App contains Footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
});
