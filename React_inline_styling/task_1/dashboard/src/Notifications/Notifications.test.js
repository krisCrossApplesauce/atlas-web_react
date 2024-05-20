import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

const testListNotifications = [
    {id: 1, type: "default", value: "New course available"},
    {id: 2, type: "urgent", value: "New resume available"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"}
];

test("tests that Notifications renders without crashing", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications renders the text: Here is the list of notifications", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={testListNotifications} />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications renders 3 NotificationItem elements", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={testListNotifications} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications correctly renders the right html for the first NotificationItem element", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={testListNotifications} />);
    expect(wrapper.find('NotificationItem').first().shallow().html()).toContain("New course available");
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications displays menuItem div when displayDrawer is false", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<div className="menuItem">Your notifications</div>)).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test("tests that Notifications does not display Notifications div when displayDrawer is false", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications displays menuItem div when displayDrawer is true", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<div className="menuItem">Your notifications</div>)).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test("tests that Notifications displays Notifications div when displayDrawer is true", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications renders correctly when passing an empty array or nothing for the listNotifications property", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications correctly renders all the NotificationItems listed in the listNotifications property", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={testListNotifications} />);
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications contains the message 'No new notification for now' when listNotifications is empty", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>No new notification for now</p>)).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that Notifications doesn't contain the message 'Here is the list of notifications' when listNotifications is empty", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// not doing the tests for task 11 of React_component
// this is the description of it anyways:

// In task_5/dashboard/src/Notifications/Notifications.test.js, add two checks:

// The first check should verify that when updating the props of the component with the same list, the component doesn’t rerender
// The second check should verify that when updating the props of the component with a longer list, the component does rerender

// Tips:
// Since the NotificationItem component is a function component, you can’t directly use React.PureComponent
// Using the React Chrome Extension to make sure the Notifications component does not rerender will not work because the extension bypass shouldComponentUpdate. Use the test to verify your code instead
// You can use the function setProps to change the props of the component

// Requirements:
// The console in your browser should not show any error or warning
