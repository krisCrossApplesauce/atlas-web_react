import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  let content = (
    <>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </>
  ); // this is what content will contain if isHeader is false, otherwise it will be changed

  if (props.isHeader === true) {
    content = (
      <>
        <th>{props.textFirstCell}</th>
        <th>{props.textSecondCell}</th>
      </>
    ); // this is what content will contain if isHeader is true and textFirstCell is not null, otherwise it will be changed

    if (props.textSecondCell == null) {
      content = (<> <th colSpan="2">{props.textFirstCell}</th> </>);
    }
  }

  return <tr>{content}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
