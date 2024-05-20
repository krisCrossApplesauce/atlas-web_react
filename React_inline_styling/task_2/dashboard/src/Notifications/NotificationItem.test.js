import React from 'react';
import enzyme, { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';
import Adapter from '@cfaester/enzyme-adapter-react-18';

enzyme.configure({ adapter: new Adapter() });

test("tests that NotificationItem renders without crashing", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that NotificationItem renders the correct html when passing dummy type and value props", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<NotificationItem type='default' value="test" />);
    expect(wrapper.contains(<li data-notification-type='default'>test</li>)).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test("tests that NotificationItem renders the correct html when passing a dummy html prop", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html().find('li')).toContain(<u>test</u>);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that NotificationItem checks that the markAsRead property works I guess", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const id = 1;
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem key={id} id={id} markAsRead={markAsReadMock} />);
    
    wrapper.simulate('click');
    
    expect(markAsReadMock).toHaveBeenCalledWith(id);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
