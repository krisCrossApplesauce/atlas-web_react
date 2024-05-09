import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

test("tests that CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that CourseList renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
});
