import React from 'react';
import enzyme, { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils, css, StyleSheet } from 'aphrodite';
import Adapter from '@cfaester/enzyme-adapter-react-18';

enzyme.configure({ adapter: new Adapter() });

const styles = StyleSheet.create({
  colSpan2: {
    textAlign: 'center',
    borderBottom: '2px solid #eee7d5',
    color: '#1ed2ac',
  },
  th: {
    borderBottom: '2px solid #eee7d5',
    color: '#1ed2ac',
  },
});

test("tests that CourseListRow renders one cell with colspan = 2 when isHeader is true and textSecondCell doesn't exist", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Big Singular Header :P" />);
    expect(wrapper.contains(<th className={css(styles.colSpan2)} colSpan="2">Big Singular Header :P</th>)).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that CourseListRow renders two cells when isHeader is true and textSecondCell does exist", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Header :P" textSecondCell="Second Header :D" />);
    expect(wrapper.containsAllMatchingElements([
        <th className={css(styles.th)}>First Header :P</th>,
        <th className={css(styles.th)}>Second Header :D</th>
    ])).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that CourseListRow renders two td elements within a tr element when isHeader is false", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Column :P" textSecondCell="Second Column :D" />);
    expect(wrapper.find('tr').children('td').containsAllMatchingElements([
        <td>First Column :P</td>,
        <td>Second Column :D</td>
    ])).toBe(true);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
