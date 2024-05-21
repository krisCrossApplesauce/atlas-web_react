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
