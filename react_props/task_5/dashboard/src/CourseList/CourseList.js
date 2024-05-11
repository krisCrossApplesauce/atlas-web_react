import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList(props) {
  let rows;
  if (props.listCourses == []) {
    rows = <CourseListRow textFirstCell="No course available yet" />;
  } else {
    rows = <></>;
    for (let i = 0; i < props.listCourses.length; i += 1) {
      // code stuff here, iterate through shape object
      rows += <CourseListRow textFirstCell={props.listCourses[i].name} textSecondCell={props.listCourses[i].credit} />;
    }
  }
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
{/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
<CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
<CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} /> */}

CourseList.defaultProps = {
  listCourses: [],
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;
