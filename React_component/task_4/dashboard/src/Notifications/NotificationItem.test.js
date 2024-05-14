import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import '../../config/setupTests';

test("tests that NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that NotificationItem renders the correct html when passing dummy type and value props", () => {
    const wrapper = shallow(<NotificationItem type='default' value="test" />);
    expect(wrapper.contains(<li data-notification-type='default'>test</li>)).toBe(true);
});
test("tests that NotificationItem renders the correct html when passing a dummy html prop", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html().find('li')).toContain(<u>test</u>);
});

test("tests that NotificationItem checks that the markAsRead property works I guess", () => {
    const id = 1;
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem key={id} id={id} markAsRead={markAsReadMock} />);
    
    wrapper.simulate('click');
    
    expect(markAsReadMock).toHaveBeenCalledWith(id);
});
