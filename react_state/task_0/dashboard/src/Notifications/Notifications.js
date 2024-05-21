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
    ':hover': {
      cursor: 'pointer',
    },
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
  opacityAnimation: {
    ':hover': {
      animationName: {
        from: { opacity: 0.5 },
        to: { opacity: 1 },
      },
      animationDuration: '1s',
      animationIterationCount: 3,
    },
  },
  bounceAnimation: {
    ':hover': {
      animationName: {
        '0%': { transform: 'translateY(0px)' },
        '25%': { transform: 'translateY(5px)' },
        '75%': { transform: 'translateY(-5px)' },
        '100%': { transform: 'translateY(0px)' },
      },
      animationDuration: '0.5s',
      animationIterationCount: 3,
    },
  },
});

class Notifications extends Component {
  shouldComponentUpdate(newProps) {
    if (newProps.listNotifications.length > this.props.listNotifications.length || newProps.displayDrawer != this.props.displayDrawer) {
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
        {this.props.displayDrawer === true ? (
          <div id="Notifications" className={css(styles.Notifications)}>
            <button className={css(styles['notificationsButton'])} aria-label="Close" onClick={() => { this.props.handleHideDrawer(); console.log(`handleHideDrawer: ${this.props.displayDrawer}\n`); }}>x</button>
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
        ) : (
          <div className={css(styles.menuItem, styles.opacityAnimation, styles.bounceAnimation)} onClick={() => { this.props.handleDisplayDrawer(); console.log(`handleDisplayDrawer: ${this.props.displayDrawer}\n`); }}>Your notifications</div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => { console.log('handleDisplayDrawer is default'); },
  handleHideDrawer: () => {},
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
