import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    marginRight: '50px',
    color: '#0000a9',
    '@media (max-width: 900px)': {
      width: 'calc(100% - 36px)',
      fontSize: '20px',
      borderBottom: '2px solid #00003c',
      padding: '10px 18px',
    },
  },
  urgent: {
    marginRight: '50px',
    color: '#e11d3f',
    '@media (max-width: 900px)': {
      width: 'calc(100% - 36px)',
      fontSize: '20px',
      borderBottom: '2px solid #00003c',
      padding: '10px 18px',
    },
  },
});

// function NotificationItem(props) {
//     return <li data-priority={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>;
// }

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, html, type, value, markAsRead } = this.props;

    let styleType = styles.default;
    if (type === "urgent") {
      styleType = styles.urgent;
    }
    return <li className={css(styleType)} onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>;
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
