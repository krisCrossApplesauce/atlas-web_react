import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return <li onClick={() => this.markAsRead(this.props.id)} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}>{this.props.value}</li>;
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
