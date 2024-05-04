import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils.js';

function Notifications() {
    return (
        <div className="Notifications">
            <button style={{position: 'absolute', right: '12px'}} aria-label="Close" onClick={() => {console.log('Close button has been clicked')}}>x</button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;
