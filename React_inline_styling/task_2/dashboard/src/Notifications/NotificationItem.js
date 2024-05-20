import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    marginRight: '50px',
    color: '#0000a9',
  },
  urgent: {
    marginRight: '50px',
    color: '#e11d3f',
  },
});

// function NotificationItem(props) {
//     return <li data-priority={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>;
// }

class NotificationItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value || nextState.value !== this.state.value) {
      return true;
    } else {
      return false;
    }
  }

  constructor(props) {
    super(props);
    this.markAsRead = this.props.markAsRead.bind(this);
  }

  render() {
    let styleType = styles.default;
    if (this.props.type === "urgent") {
      styleType = styles.urgent;
    }
    return <li className={css(styleType)} onClick={() => this.markAsRead(this.props.id)} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}>{this.props.value}</li>;
  }
}

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
