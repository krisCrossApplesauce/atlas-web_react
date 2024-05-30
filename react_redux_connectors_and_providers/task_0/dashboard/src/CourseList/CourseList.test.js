import React from 'react';
import enzyme, { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import Adapter from '@cfaester/enzyme-adapter-react-18';

enzyme.configure({ adapter: new Adapter() });

const testListCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];


test("tests that CourseList renders without crashing", () => {
  StyleSheetTestUtils.suppressStyleInjection();
  const wrapper = shallow(<CourseList />);
  expect(wrapper.exists()).toBe(true);
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("tests that CourseList renders the 5 different rows", () => {
  StyleSheetTestUtils.suppressStyleInjection();
  const wrapper = shallow(<CourseList listCourses={testListCourses} />);
  expect(wrapper.find('CourseListRow')).toHaveLength(5);
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
