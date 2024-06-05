import React, { Component } from 'react';
import propTypes from 'prop-types';
import BodySection from './BodySection';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};

export default BodySectionWithMarginBottom;
