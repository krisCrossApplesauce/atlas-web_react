import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

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

function CourseListRow(props) {
  const headerBgColor = {backgroundColor: '#eee7d545'};
  let bgColor = {backgroundColor: '#1ed2ac67'};
  let content = (
    <>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </>
  ); // this is what content will contain if isHeader is false, otherwise it will be changed

  if (props.isHeader === true) {
    bgColor = headerBgColor;
    content = (
      <>
        <th className={css(styles.th)}>{props.textFirstCell}</th>
        <th className={css(styles.th)}>{props.textSecondCell}</th>
      </>
    ); // this is what content will contain if isHeader is true and textFirstCell is not null, otherwise it will be changed

    if (props.textSecondCell == null) {
      content = (<><th className={css(styles.colSpan2)} colSpan="2">{props.textFirstCell}</th></>);
    }
  }

  return <tr style={bgColor}>{content}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
