import React, { Component } from 'react';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';
// import { getLatestNotification } from '../utils/utils.js';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  Notifications: {
    position: 'auto',
    width: 'auto',
    height: 'auto',
    border: 'ridge #1ed2ac',
    padding: '0px 16px 0px 20px',
    margin: '10px',
    marginRight: '15px',
    backgroundColor: '#fff8e6',
    fontFamily: 'sans-serif',
    color: '#00003c',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: '-10px',
      left: '-10px',
      width: 'calc(100% - 5px)',
      height: 'calc(100% - 6px)',
      zIndex: '1',
      padding: 0,
      fontSize: '20px',
      // border: 'none',
    },
  },
  menuItem: {
    width: 'calc(100% - 15px)',
    margin: '10px 10px -5px 0px',
    fontFamily: 'sans-serif',
    color: '#1ed2ac',
    textAlign: 'right',
    whiteSpace: 'nowrap',
  },
  'notificationsButton': {
    fontWeight: 'bold',
    backgroundColor: '#fff8e6',
    border: '2.5px ridge #1ed2ac',
    margin: '1.6px 1.5px 0px 0px',
    marginLeft: 'calc(100% - 10px)',
    ':hover': {
      backgroundColor: '#eee7d5',
      color: '#00002b',
    },
    '@media (max-width: 900px)': {
      marginLeft: 'calc(100% - 27px)',
    },
  },
  'ul': {
    '@media (max-width: 900px)': {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
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
        <div className={css(styles.menuItem)}>Your notifications</div>
        {this.props.displayDrawer && (
          <div id="Notifications" className={css(styles.Notifications)}>
            <button className={css(styles['notificationsButton'])} aria-label="Close" onClick={() => {console.log('Close button has been clicked')}}>x</button>
            {this.props.listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles['ul'])}>
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
