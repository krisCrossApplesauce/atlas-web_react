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
    return notificationData.default
        .filter(obj => obj.author.id === userId)
        .map(obj => obj.context);
}

export { getAllNotificationsByUser, normalizedData};
