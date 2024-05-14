import React, { Component } from 'react';
import propTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="BodySectionWithMargin">
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