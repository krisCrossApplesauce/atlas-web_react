import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import '../../config/setupTests';

test("tests that CourseListRow renders one cell with colspan = 2 when isHeader is true and textSecondCell doesn't exist", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Big Singular Header :P" />);
    expect(wrapper.contains(<th colSpan="2">Big Singular Header :P</th>)).toBe(true);
});

test("tests that CourseListRow renders two cells when isHeader is true and textSecondCell does exist", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Header :P" textSecondCell="Second Header :D" />);
    expect(wrapper.containsAllMatchingElements([
        <th>First Header :P</th>,
        <th>Second Header :D</th>
    ])).toBe(true);
});

test("tests that CourseListRow renders two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Column :P" textSecondCell="Second Column :D" />);
    expect(wrapper.find('tr').children('td').containsAllMatchingElements([
        <td>First Column :P</td>,
        <td>Second Column :D</td>
    ])).toBe(true);
});
