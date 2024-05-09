import React from 'react';
import PropTypes from 'prop-types';

// function NotificationItem(props) {
//     return <li data-priority={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>;
// }

function NotificationItem(props) {
  return <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>;
}

NotificationItem.defaultProps = {
  type: "default",
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default NotificationItem;
