import React from 'react';
import enzyme, { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils, css, StyleSheet } from 'aphrodite';
import util from 'util';
import Adapter from '@cfaester/enzyme-adapter-react-18';

enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global, 'TextEncoder', {
    value: util.TextEncoder,
});

const styles = StyleSheet.create({
    default: {
        marginRight: '50px',
        color: '#0000a9',
        '@media (max-width: 900px)': {
            width: 'calc(100% - 36px)',
            fontSize: '20px',
            borderBottom: '2px solid #00003c',
            padding: '10px 18px',
        },
    },
    urgent: {
        marginRight: '50px',
        color: '#e11d3f',
        '@media (max-width: 900px)': {
            width: 'calc(100% - 36px)',
            fontSize: '20px',
            borderBottom: '2px solid #00003c',
            padding: '10px 18px',
        },
    },
});

test("tests that NotificationItem renders without crashing", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that NotificationItem renders the correct html when passing dummy type and value props", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<NotificationItem type='default' value="test" />);
    expect(wrapper.html()).toContain("<li class=\"default_1tc4ftn\" data-notification-type=\"default\">test</li>");
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test("tests that NotificationItem renders the correct html when passing a dummy html prop", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain("<li class=\"default_1tc4ftn\" data-notification-type=\"default\"><u>test</u></li>");
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
