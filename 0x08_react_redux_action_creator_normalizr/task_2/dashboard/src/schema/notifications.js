import * as notificationData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
    idAttribute: 'guid',
});
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

const normalizedData = normalize(notificationData.default, [notification]);

function getAllNotificationsByUser(userId) {
    const userNotifs = Object.values(normalizedData.entities.notifications)
        .filter(n => n.author === userId)
        .map(n => normalizedData.entities.messages[n.context]);

    return userNotifs;
}

export { getAllNotificationsByUser, normalizedData};
