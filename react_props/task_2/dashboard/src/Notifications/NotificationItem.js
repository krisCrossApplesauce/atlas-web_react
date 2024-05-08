import React from 'react';

// function NotificationItem(props) {
//     return <li data-priority={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>;
// }

function NotificationItem(props) {
    return <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>;
}

export default NotificationItem;
