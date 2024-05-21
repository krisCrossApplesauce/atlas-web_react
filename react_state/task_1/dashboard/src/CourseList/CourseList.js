import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    outline: '1px solid #eee7d5',
    textAlign: 'left',
    color: '#eee7d5',
  },
  colSpan2: {
    textAlign: 'center',
  },
});

function CourseList(props) {
  return (
    <table id="CourseList" className={css(styles.CourseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {props.listCourses.length === 0 ? (
          <tr>
            <td colSpan="2" className={css(styles.colSpan2)}>No course available yet</td>
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
