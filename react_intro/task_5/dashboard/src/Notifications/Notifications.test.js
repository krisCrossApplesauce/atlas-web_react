import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test("tests that Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that Notifications renders 3 list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
});

test("tests that Notifications renders the text: Here is the list of notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
});
