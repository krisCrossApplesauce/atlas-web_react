import React, { useState } from 'react';
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
  checkbox: {
    appearance: 'none',
    margin: 'auto 5px auto 3.7px',
    padding: '0.29rem',
    border: '2px solid #1ed2ac',
    borderRadius: '2px',
    // backgroundColor: '#eee7d5',
    ':checked': {
      fontColor: '#00003c',
      accentColor: '#1ed2ac',
      backgroundColor: '#1ed2ac',
      outline: '1px solid #eee7d5',
      outlineOffset: '-3px',
    },
  },
});

function CourseListRow(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => { setIsChecked(!isChecked); }

  const rowChecked = {backgroundColor: '#eee7d5', color: '#00003c'};
  const headerBgColor = {backgroundColor: '#eee7d545'};
  let bgColor = {backgroundColor: '#1ed2ac67'};

  let content = (
    <>
      <td><input type="checkbox" className={css(styles.checkbox)} onChange={handleChecked} />{props.textFirstCell}</td>
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

  return <tr style={isChecked ? rowChecked : bgColor}>{content}</tr>;
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
