import React, { Component } from 'react';
import propTypes from 'propTypes';

class BodySection extends Component {
  render() {
    return (
      <div className="body-section">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};

export default BodySection;
