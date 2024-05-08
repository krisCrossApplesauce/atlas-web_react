import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import '../../config/setupTests';

test("tests that NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that NotificationItem renders the correct html when passing dummy type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.contains(<li data-notification-type="default">test</li>)).toBe(true);
});

test("tests that NotificationItem renders the correct html when passing a dummy html prop", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.contains(<li dangerouslySetInnerHTML={{ __html: '<u>test</u>' }}></li>)).toBe(true);
});
