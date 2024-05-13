import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const testListCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];


test("tests that CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that CourseList renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList listCourses={testListCourses} />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
});
