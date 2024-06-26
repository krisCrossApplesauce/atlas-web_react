import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList(props) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {props.listCourses.length === 0 ? (
          <tr>
            <td colSpan="2">No course available yet</td>
          </tr>
        ) : (
          props.listCourses.map((course) => (
            <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: [],
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;
