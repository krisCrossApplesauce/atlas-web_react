import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test("tests that Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that Notifications renders the text: Here is the list of notifications", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
});

test("tests that Notifications renders 3 NotificationItem elements", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
});

test("tests that Notifications correctly renders the right html for the first NotificationItem element", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').get(0)).toEqual(<NotificationItem type="default" value="New course available" />);
});

test("tests that Notifications displays menuItem div when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<div className="menuItem">Your notifications</div>)).toBe(true);
});
test("tests that Notifications does not display Notifications div when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
});

test("tests that Notifications displays menuItem div when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<div className="menuItem">Your notifications</div>)).toBe(true);
});
test("tests that Notifications displays Notifications div when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
});
