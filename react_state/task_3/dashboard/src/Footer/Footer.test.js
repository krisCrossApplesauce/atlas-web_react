import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

test("tests that Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that Footer at the very least contains the text 'Copyright'", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toContain('Copyright');
});

test("tests that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('a')).toHaveLength(0);
});

test("tests that the link is displayed when the user is logged in within the context", () => {
    const wrapper = shallow(<Footer />);
    // something here that makes the context user logged in
    expect(wrapper.find('a')).toHaveLength(1);
});
