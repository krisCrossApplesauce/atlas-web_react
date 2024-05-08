import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

test("tests that CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
});
