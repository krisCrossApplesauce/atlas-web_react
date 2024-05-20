import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';
// import { getLatestNotification } from '../utils/utils.js';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  Notifications: {
    border: 'ridge #1ed2ac',
    padding: '0px 16px 0px 20px',
    margin: '10px',
    marginRight: '15px',
    backgroundColor: '#fff8e6',
    fontFamily: 'sans-serif',
    color: '#00003c',
  },
});

class Notifications extends Component {
  shouldComponentUpdate(newProps) {
    if (newProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    } else {
      return false;
    }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {this.props.displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button style={{marginLeft: 'calc(100% - 10px)'}} aria-label="Close" onClick={() => {console.log('Close button has been clicked')}}>x</button>
            {this.props.listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem key={notification.id} id={notification.id} html={notification.html} type={notification.type} value={notification.value} markAsRead={this.markAsRead} />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
