import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test("tests that Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that Notifications renders the text: Here is the list of notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
});

test("tests that Notifications renders 3 NotificationItem elements", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
});

test("tests that Notifications correctly renders the right html for the first NotificationItem element", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').get(0)).toEqual(<NotificationItem type="default" value="New course available" />);
});
