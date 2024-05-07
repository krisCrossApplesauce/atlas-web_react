import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test("tests that App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that App renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').hasClass("App-header")).toBe(true);
});

test("tests that App renders a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('body').hasClass("App-body")).toBe(true);
});

test("tests that App renders a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('footer').hasClass("App-footer")).toBe(true);
});
